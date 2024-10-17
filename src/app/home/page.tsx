"use client"

import React from 'react';

import PagePlaceholder from '@/components/page-placeholder';
import  { Chartcomponent }  from '../../components/chart';
import  { Chart2component } from '../../components/chart2';
import  { Tablecontest } from '../../components/table';
import  { Contestcard } from '../../components/livecontest';

export default function Dashboard() {
  return (
    <div>
      <PagePlaceholder pageName="Home" />

      <div className='flex justify-evenly'>
        <Chartcomponent />
        <Chart2component />
        <Contestcard />
      </div>
      <div className='flex justify-evenly'>
        <Tablecontest />
        
      </div>
    </div>
  );
}
