
import CalibrationStat from "@/components/calibration/calibration_stat";
import MeasureStat from "@/components/measure/measure_stat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react'

export default function DashboardPage() {
  
  return (
    <Tabs defaultValue="measure">
      <TabsList className="mb-4">
        <TabsTrigger value="measure">Measurement</TabsTrigger>
        <TabsTrigger value="calibration">Calibration</TabsTrigger>
      </TabsList>

      <TabsContent value="measure">
        <MeasureStat/>
      </TabsContent>
      <TabsContent value="calibration">
        <CalibrationStat/>
      </TabsContent>
    </Tabs>
  )
}
