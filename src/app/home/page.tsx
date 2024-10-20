"use client";

import React from "react";

import { Chartcomponent } from "../../components/chart";
import { Chart2component } from "../../components/chart2";
import { Tablecontest } from "../../components/table";
import { Contestcard } from "../../components/livecontest";

export default function Dashboard() {
  return (
    <div className="m-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contestcard and Chart2component */}
        <Contestcard />
        <Chart2component />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        {/* Chartcomponent and Tablecontest */}
        <Chartcomponent />
        <Tablecontest />
      </div>
    </div>
  );
}
