import React from 'react';

function Badge({ bgColor, textColor, children }) {
  const className = [
    'rounded-full font-bold px-3 py-1 mr-4',
    bgColor,
    textColor,
  ].join(' ');

  return <span className={className}>{children}</span>;
}

export default Badge;
