'use client'

import { EmptyState } from '@/components/global-empty-state'
import React from 'react'
import { Filters } from '../../~shared-with-you/_components/filters'

const TrashMainPage = () => {
  return (
    <div className="mt-6">
      {/* <Filters
        filter="all"
        onFilterChange={() => {}}
        onSortChange={() => {}}
        onViewChange={() => {}}
        sort="date_created"
        view="grid"
      /> */}
      <EmptyState
        title="No patexas found in trash."
        description="Try changing your filters, or"
        actionLabel="view all patexa"
        actionLink="/~"
      />
    </div>
  )
}

export default TrashMainPage
