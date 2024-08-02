"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  FileCogIcon,
  FileXIcon,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type MasterSpec = {
  spec_id: string;
  process: string;
  part_no: string;
  item_no: number;
  item_check: string;
  spec_nominal: number;
  tolerance_max: number;
  tolerance_min: number;
  point: number;
  method: number;
};

export const columns: ColumnDef<MasterSpec>[] = [
  {
    accessorKey: "spec_id",
    header: "Spec ID",
  },
  {
    accessorKey: "process",
    header: "Process",
  },
  {
    accessorKey: "part_no",
    header: "Part No.",
  },
  {
    accessorKey: "item_no",
    header: "Item No.",
  },
  {
    accessorKey: "item_check",
    header: "Item Check",
  },
  {
    accessorKey: "spec_nominal",
    header: "Spec Nominal",
  },
  {
    accessorKey: "tolerance_max",
    header: "Tolerance Max",
  },
  {
    accessorKey: "tolerance_min",
    header: "Tolerance Min",
  },
  {
    accessorKey: "point",
    header: "Point",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const MasterSpec = row.original;
      const handleDelete = async () => {
        const confirmed = window.confirm(
          `Are you sure you want to delete Spec ID: ${MasterSpec.spec_id}?`
        );
        if (!confirmed) return;

        try {
          const response = await fetch(
            `http://localhost:8000/specification/${MasterSpec.spec_id}`,
            {
              method: "DELETE",
            }
          );

          if (!response.ok) {
            throw new Error(`Failed to delete Spec ID: ${MasterSpec.spec_id}`);
          }

          alert(`Successfully deleted Spec ID: ${MasterSpec.spec_id}`);
          // Optionally, refresh the table data here to reflect the deletion
        } catch (error) {
          console.error(error);
          alert(`Error deleting Spec ID: ${MasterSpec.spec_id}`);
        }
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(MasterSpec.spec_id)}
            >
              Copy SpecID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="bg-yellow-500 hover:bg-yellow-500">
              <FileCogIcon className="h-4 w-4" /> Update
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-red-500 hover:bg-red-500">
              <FileXIcon className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
