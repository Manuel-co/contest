import React from 'react';

import Newcontest from '@/components/new-contest/new-contest';
import PagePlaceholder from '@/components/page-placeholder';

export default function page() {
  return (
    <div className="p-0 m-0">
      {/* <PagePlaceholder pageName="Create New Contest" /> */}
      <Newcontest />
    </div>
  );
}
