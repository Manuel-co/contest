import React from 'react';

export default function PagePlaceholder({ pageName }: { pageName: string }) {
  return (
    <div className="flex flex-1 sm:h-fit flex-col space-y-2 px-4">
      <span className="font-bold text-3xl">{pageName}</span>
    </div>
  );
}
