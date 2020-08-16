import React from 'react';
import Repos from './Repos';

function Menu({ sections, repos, onChangeRepo }) {
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    let last_known_scroll_position = 0;
    let ticking = false;
    let timeout;

    function doSomething(position) {
      const index = findNearElementIndex(position);

      setSelected(index);
    }

    function onScroll(e) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
          });

          ticking = true;
        }
      }, 150);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function goTo(index) {
    const elements = document.querySelectorAll('[id^="section-"]');
    const element = elements[index];

    setSelected(index);

    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    <div className="flex flex-col items-center w-6 my-12 ml-12">
      <div className="ml-12 mb-6 border-2 border-solid border-gray-300 rounded-sm text-gray-700">
        <Repos repos={repos} onChange={onChangeRepo} />
      </div>
      {sections.map((section, index) => (
        <React.Fragment key={section.ref}>
          {index === 0 ? null : (
            <div
              className="h-6 my-1 bg-gray-400"
              style={{ width: '2px' }}
            ></div>
          )}
          <div
            className={
              'flex items-center justify-center rounded-full border-2 border-solid border-gray-500 w-8 h-8 cursor-pointer' +
              (selected === index ? ' border-opacity-100' : ' border-opacity-0')
            }
            onClick={() => goTo(index)}
          >
            <div className={'rounded-full w-6 h-6 ' + section.bgColor}></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function findNearElementIndex(scrollPosition) {
  const elements = document.querySelectorAll('[id^="section-"]');

  let index = 0;
  let nearElement = elements[index];
  let nearElementPosition = parseInt(nearElement.id.match(/\d+$/g));
  let nearElementDistance = Math.abs(nearElementPosition - scrollPosition);

  for (let i = 1; i < elements.length; i += 1) {
    const element = elements[i];
    const position = parseInt(element.id.match(/\d+$/g));

    const distance = Math.abs(position - scrollPosition);

    if (distance < nearElementDistance) {
      nearElementDistance = distance;
      index = i;
    }
  }

  return index;
}

export default Menu;
