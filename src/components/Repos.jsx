import React from 'react';

function Repos({ repos, onChange }) {
  const node = React.useRef();
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState(() => {
    return repos.length ? repos[0] : '';
  });

  function select(repo) {
    setSelected(repo);
    onChange(repo);
  }

  function toggleOptions() {
    setVisible(prev => !prev);
  }

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (node.current.contains(e.target)) {
        return;
      }

      setVisible(false);
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  return (
    <div
      ref={node}
      className="z-10 relative h-12 w-56 border border-solid border-gray-300 rounded-sm text-gray-700 cursor-pointer"
      onClick={toggleOptions}
    >
      <div className="flex items-center px-2 w-full h-full">
        <img
          className="w-8 h-8"
          src={selected.owner.avatar_url}
          alt={selected.name + ' Logo'}
        />
        <div className="w-40 ml-2">{selected.name}</div>
      </div>
      <div
        className={
          'absolute top-0 left-0 mt-12 -ml-px bg-white border border-solid border-gray-300 rounded-sm w-48 h-64 overflow-y-auto' +
          (visible ? ' block' : ' hidden')
        }
      >
        {repos.map(repo => (
          <div className="h-12" key={repo.id} onClick={() => select(repo)}>
            <div className="flex items-center px-2 w-full h-full cursor-pointer">
              <img
                className="w-8 h-8"
                src={repo.owner.avatar_url}
                alt={repo.name + ' Logo'}
              />
              <div className="w-40 ml-2">{repo.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Repos;
