import React from 'react';

function SideMenu({ menu, content }) {
  return (
    <div className="flex flex-row">
      <div className="h-screen overflow-y-auto fixed top-0 left-0 w-48">
        {menu}
      </div>
      <div className="ml-48">{content}</div>
    </div>
  );
}

export default SideMenu;
