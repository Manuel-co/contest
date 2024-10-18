import React from 'react';
import PagePlaceholder from '@/components/page-placeholder';
import Allcontest from '../../components/all-contest/All-contest';

export default function page() {
  return (
    <div className="p-0 m-0">
      <PagePlaceholder pageName="All Contest" />

      <div className="p-0 m-0">
        <Allcontest />
      </div>
    </div>
  );
}
