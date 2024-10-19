"use client";

import React from 'react';

import PagePlaceholder from '@/components/page-placeholder';
import { Chartcomponent } from '../../components/chart';
import { Chart2component } from '../../components/chart2';
import { Tablecontest } from '../../components/table';
import { Contestcard } from '../../components/livecontest';

export default function Dashboard() {
  return (
    <div className='m-5'>
      {/* <PagePlaceholder pageName="Home" /> */}

      <div className='grid grid-cols-2 gap-6'>
        <Contestcard />
        <Chart2component />
      </div>
      <div className='grid grid-cols-2 gap-6 mt-5 w-[100%]'>
        <Chartcomponent />
        <Tablecontest />
      </div>
    </div>
  );
}
