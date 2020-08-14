import React from 'react';
import { getRecentPulls } from '../utils/services';

function Pulls() {
  const [pulls, setPulls] = React.useState([]);

  React.useEffect(() => {
    async function getPulls() {
      const result = await getRecentPulls({ state: 'open' });

      setPulls(result);
    }

    getPulls();
  }, []);

  return (
    <div
      className="hello-world"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {pulls.map(p => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}

export default Pulls;
