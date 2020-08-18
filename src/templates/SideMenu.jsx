import React from 'react';

function SideMenu({ navbar, menu, content }) {
  return (
    <>
      <div className="w-full h-20 pl-12">{navbar}</div>
      <div className="h-screen overflow-y-auto fixed top-0 left-0 w-48 pl-12 mt-20">
        {menu}
      </div>
      <div className="ml-48 mt-20">{content}</div>
    </>
  );
}

export default SideMenu;
