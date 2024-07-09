import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ClipboardCheckIcon,
  ClipboardMinusIcon,
  ClipboardXIcon,
  ComputerIcon,
} from "lucide-react";
import SummaryCalibration from "./chart_summary_cal";

export default function CalibrationStat() {
  const totalAvailableDevice = 100;
  const totalUnderCal = 20;
  const totalExpire = 10;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="border-4 border-green-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl ">Total Available Device</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-5">
              <ClipboardCheckIcon size={50} />
              <div className="text-5xl font-bold">{totalAvailableDevice}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-orange-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl ">
              Total Under Calibrate Device
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-5">
              <ClipboardMinusIcon size={50} />
              <div className="text-5xl font-bold">{totalUnderCal}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-red-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl ">
              Total Calibration expire Device
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-5">
              <ClipboardXIcon size={50} />

              <div className="text-5xl font-bold">{totalExpire}</div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="my-4 border-2 border-blue-500 flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ComputerIcon/>
            <span>Summary of Calibration Device</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SummaryCalibration/>
        </CardContent>
      </Card>
    </>
  );
}
