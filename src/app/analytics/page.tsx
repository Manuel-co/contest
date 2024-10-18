'use client';

import React from 'react';

import PagePlaceholder from '@/components/page-placeholder';

import { Analyticscard } from '../../components/analytics/analytics';
import { Analyticstable } from '../../components/analytics/analyticstable';
// import { Chartcomponent } from '../../components/chart';
// import { Chart2component } from '../../components/chart2';
// import { Contestcard } from '../../components/livecontest';
// import { Tablecontest } from '../../components/table';

export default function Analytics() {
  return (
    <div>
      <PagePlaceholder pageName="Analytics" />

      <div className="flex justify-evenly">
        <Analyticscard />
      </div>
      {/* <div className="flex justify-evenly">
        <Chart2component />
        <Contestcard />
      </div> */}
      <div className="flex justify-evenly">
        <Analyticstable />
      </div>
    </div>
  );
}
