"use client";

import { Chartcomponent } from "@/components/chart";
import { Chart2component } from "@/components/chart2";
import { Contestcard } from "@/components/livecontest";
import { Tablecontest } from "@/components/table";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="m-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Contestcard />
        <Chart2component />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <Chartcomponent />
        {isMounted && <Tablecontest />}
      </div>
    </div>
  );
}
