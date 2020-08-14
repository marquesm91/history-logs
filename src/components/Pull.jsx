import React from 'react';
import Markdown from './Markdown';
import Badge from './Badge';

function Pull({ data, ...props }) {
  return (
    <div className="w-2/3 mt-4">
      <div className="flex flex-row items-center">
        <Badge mergedAt={data.merged_at} closedAt={data.closed_at} />
        <p className="text-xl font-medium mb-2">{data.title}</p>
      </div>
      <div className="my-8">
        <Markdown source={data.body} />
      </div>
    </div>
  );
}

export default Pull;
