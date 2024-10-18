import React from 'react'
import PagePlaceholder from '@/components/page-placeholder';
import {Contest} from '../../components/contest/contest';

export default function page() {
  return (
    <div >
      <PagePlaceholder pageName="" />

      <div >
        <Contest />
      </div>
      </div>
  )
}
