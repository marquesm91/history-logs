import React from 'react';
import Pull from './Pull';

function Pulls({ pulls }) {
  return (
    <div className="container mx-auto">
      {pulls.map(pull => (
        <React.Fragment key={pull.id}>
          <Pull data={pull} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Pulls;
