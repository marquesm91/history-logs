import React from 'react';
import Repos from './Repos';

function Navbar({ repos, onChangeRepo }) {
  return (
    <div className="flex flex-row items-center h-full">
      <Repos repos={repos} onChange={onChangeRepo} />
    </div>
  );
}

export default Navbar;
