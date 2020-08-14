import React from 'react';

function Badge({ mergedAt, closedAt }) {
  const props = getBadgeClassProps(mergedAt, closedAt);

  return <span className={props.className}>{props.children}</span>;
}

function getBadgeClassProps(mergedAt, closedAt) {
  const baseClassName = 'rounded-full text-white font-bold px-3 py-1 mr-4';

  if (mergedAt !== null) {
    return {
      className: baseClassName + ' bg-purple-600',
      children: 'Merged',
    };
  }

  if (closedAt !== null) {
    return {
      className: baseClassName + ' bg-red-600',
      children: 'Closed',
    };
  }

  return {
    className: baseClassName + ' bg-green-600',
    children: 'Open',
  };
}

export default Badge;
