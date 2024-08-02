import AddMasterspec from "@/components/add_spec/add_masterspec";
import UpdateMasterspec from "@/components/update_spec/update_masterspec";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';

export default function DashboardPage() {
  return (
    <Tabs defaultValue="add">
      <TabsList className="mb-4">
        <TabsTrigger value="add">Add</TabsTrigger>
        <TabsTrigger value="update">Update</TabsTrigger>
      </TabsList>

      <TabsContent value="add">
        <AddMasterspec />
      </TabsContent>
      <TabsContent value="update">
        <UpdateMasterspec />
      </TabsContent>
    </Tabs>
  );
}

