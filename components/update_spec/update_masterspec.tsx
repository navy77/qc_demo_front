"use client";  // Add this line at the top of the file

import React from "react";
import { MasterSpec, columns } from "./columns";
import { DataTable } from "./data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getMasterSpec(): Promise<MasterSpec[]> {
  try {
    const res = await fetch("http://localhost:8000/specification/");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch master spec:", error);
    return [];
  }
}

export default function UpdateMasterspec() {
  const [data, setData] = React.useState<MasterSpec[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await getMasterSpec();
        setData(result);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="flex justify-center items-center"><p>Loading ...</p>;</div>
  if (error) return <p>{error}</p>;

  return (
    <div className="flex justify-center items-center">
      <Card className="border-2 border-primary w-full" style={{ maxWidth: "800" }}>
      <CardHeader className="flex justify-center mb-4 p-5">
          <CardTitle className="text-center">
           Master Specification
          </CardTitle>
        </CardHeader>
        <DataTable columns={columns} data={data} />
      </Card>
      
    </div>
  );
}
