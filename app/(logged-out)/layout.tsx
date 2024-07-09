import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import React from "react";
type Props = {
  children?: React.ReactNode;
};

export default function LogoutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-5 right-5" />
    </>
  );
}
