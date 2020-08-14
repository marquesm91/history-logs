import React from 'react';
import { getRecentPulls } from '../utils/services';
import Pull from './Pull';

function Pulls() {
  const [pulls, setPulls] = React.useState([]);

  React.useEffect(() => {
    async function getPulls() {
      const result = await getRecentPulls({ state: 'all' });

      setPulls(result);
    }

    getPulls();
  }, []);

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
