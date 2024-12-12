"use client";

import { FontUpload } from "@/components/font-upload";
import React from "react";

const CustomFonts = () => {
  return (
    <div className="mt-10">
      <p className="text-muted-foreground text-base mb-3">
        Patexa comes with <span className="font-semibold">Google Fonts</span>,
        but you can also upload your own to use in custom themes
      </p>
      <div className="">
        <FontUpload isPro />
      </div>
    </div>
  );
};

export default CustomFonts;
