import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardCheckIcon, ComputerIcon, CpuIcon, FactoryIcon } from 'lucide-react';
import SummaryMeasure from './chart_summary_measure';

export default function MeasureStat() {
  const totaSpec = 100;
  const totaModel = 80;
  const totaDevice = 20;
  return (
    <>
    <div className="grid lg:grid-cols-3 gap-4">
        <Card className="border-4 border-blue-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl ">Total Measurement Spec</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-5">
              <ClipboardCheckIcon size={50}/>
              <div className="text-5xl font-bold">{totaSpec}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-4 border-blue-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl ">Total Measurement Model</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-5">
              <FactoryIcon size={50}/>
              <div className="text-5xl font-bold">{totaModel}</div>
            </div>
          </CardContent>
        </Card>


        <Card className="border-4 border-blue-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl ">Total Measurement Device</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-5">
              <CpuIcon size={50}/>
              <div className="text-5xl font-bold">{totaDevice}</div>
            </div>
          </CardContent>
        </Card>     
    </div>
            <Card className="my-4 border-2 border-blue-500 flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ComputerIcon/>
                <span>Summary of Measurement Result</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-0">
              <SummaryMeasure/>
            </CardContent>
          </Card>
          </>
  )
}
