"use client";

import React, { useState } from "react"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import QRCode from "qrcode.react"; // Import QRCode component

// Define the form schema with input fields and a select
const formSchema = z.object({
  part_no: z
    .string()
    .min(2, { message: "Part no. must be at least 2 characters." }),
  process: z.string().min(1, { message: "You must select an option." }),
  item_no: z
    .string()
    .min(1, { message: "Item no. must be at least 1 character." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: "Item no. must be a valid number",
    })
    .refine((val) => val > 0, { message: "Item no. must be above 0" }),
  item_check: z
    .string()
    .min(2, { message: "Item check must be at least 2 characters." }),
  spec_nominal: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), {
      message: "Spec nominal must be a valid number",
    }),
  tolerance_max: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), {
      message: "Tolerance max must be a valid number",
    })
    .refine((val) => val >= 0, {
      message: "Tolerance max must be non-negative",
    }),
  tolerance_min: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), {
      message: "Tolerance min must be a valid number",
    })
    .refine((val) => val, { message: "Tolerance min must be non-negative" }),
  method: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: "Method must be a valid number" })
    .refine((val) => val > 0, { message: "Method must be above 0" }),
  point: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: "Point must be a valid number" })
    .refine((val) => val > 0, { message: "Number of points must be positive" }),
});

export default function AddMasterspec() {
  // Initialize state for the dialog
  const [open, setOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [genCode, setGenCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      part_no: "",
      process: "",
      item_no: "",
      item_check: "",
      spec_nominal: "",
      tolerance_max: "",
      tolerance_min: "",
      method: "",
      point: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data) => {
    // Generate spec_id
    const spec_id = `${data.part_no}-${data.process}-${data.item_no}`;
    console.log("Form data", { ...data, spec_id });
    setGenCode(spec_id);
    setOpen(false); // Close the success alert dialog
    setShowError(false); // Hide the error alert

    try {
      const response = await fetch("http://localhost:8000/specification/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, spec_id }), // Send form data as JSON, include spec_id
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      console.log("API Response:", result);
      setOpen(true); // Open the success alert dialog
    } catch (error) {
      setErrorMessage(error.message || "An error occurred");
      setShowError(true); // Show the error alert dialog
    }
  };

  // Handle form reset
  const onClear = () => {
    form.reset();
  };

  // Select options
  const selectOptions = ["sidelap", "odgrinding", "outgoing"];

  return (
    <div className="flex justify-center items-center">
      <Card className="border-2 border-primary w-full" style={{ maxWidth: "800" }}>
        <CardHeader className="flex justify-center mb-4 p-5">
          <CardTitle className="text-center">
           Add Master Specification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="part_no"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Part no.</FormLabel>
                    <FormControl>
                      <Input placeholder="Part no." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="process"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Process</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          {field.value || "Select an option"}
                        </SelectTrigger>
                        <SelectContent>
                          {selectOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="item_no"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item no.</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Item no." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="item_check"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item check</FormLabel>
                    <FormControl>
                      <Input placeholder="Item check" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="spec_nominal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spec Nominal</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Spec Nominal"
                        step="0.01"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tolerance_max"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tolerance max</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Tolerance max"
                        step="0.01"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tolerance_min"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tolerance min</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Tolerance min"
                        step="0.01"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Method</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Method"
                        step="1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="point"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Points</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Points"
                        step="1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-2">
                <Button type="button" onClick={onClear} variant="outline">
                  Clear
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      {/* Success Alert Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogTitle>Specification Generated</AlertDialogTitle>
          <AlertDialogDescription>
            The specification ID {genCode} has been successfully generated.
            <div className="flex justify-center">
              <QRCode value={genCode} />
            </div>
          </AlertDialogDescription>
          <AlertDialogAction onClick={() => setOpen(false)}>Close</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
      {/* Error Alert Dialog */}
      <AlertDialog open={showError} onOpenChange={setShowError}>
        <AlertDialogContent>
          <AlertDialogTitle>Error</AlertDialogTitle>
          <AlertDialogDescription>{errorMessage}</AlertDialogDescription>
          <AlertDialogAction onClick={() => setShowError(false)}>Close</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
