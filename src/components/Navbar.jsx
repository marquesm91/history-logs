import React from 'react';
import Repos from './Repos';

function Navbar({ repos, onChangeRepo }) {
  return (
    <div className="flex flex-row items-center h-full">
      <div className="border-2 border-solid border-gray-300 rounded-sm text-gray-700">
        <Repos repos={repos} onChange={onChangeRepo} />
      </div>
    </div>
  );
}

export default Navbar;
