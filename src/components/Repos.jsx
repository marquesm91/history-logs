import React from 'react';

function Repos({ repos, onChange }) {
  const [selected, setSelected] = React.useState(() => {
    return repos.length ? repos[0].id : '';
  });

  function handler(e) {
    const id = parseInt(e.target.value, 10);

    const repo = repos.find(r => r.id === id);

    if (repo) {
      setSelected(repo.id);
      onChange(repo, e);
    }
  }

  return (
    <select onChange={handler} value={selected} className="w-32 h-10">
      {repos.map(repo => (
        <option key={repo.id} value={repo.id}>
          {repo.name}
        </option>
      ))}
    </select>
  );
}

export default Repos;
