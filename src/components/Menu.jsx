import React from 'react';

function Menu({ sections }) {
  function goTo(sectionId) {
    document.querySelector('#' + sectionId).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    <div className="flex flex-col items-center w-6 my-12 ml-12">
      {sections.map((section, index) => (
        <>
          {index === 0 ? null : (
            <div
              className="h-6 my-1 bg-gray-400"
              style={{ width: '2px' }}
            ></div>
          )}
          <div
            key={section.ref}
            className={'rounded-full w-6 h-6 cursor-pointer ' + section.bgColor}
            onClick={() => goTo(section.ref)}
          ></div>
        </>
      ))}
    </div>
  );
}

export default Menu;
