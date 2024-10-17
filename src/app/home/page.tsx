"use client"

import React from 'react';

import PagePlaceholder from '@/components/page-placeholder';
import  { Chartcomponent }  from '../../components/chart';
import  { Chart2component } from '../../components/chart2';
export default function Dashboard() {
  return (
    <div>
      <PagePlaceholder pageName="Home" />

      <div className='flex justify-evenly'>
        <Chartcomponent />
        <Chart2component />
      </div>
    </div>
  );
}
