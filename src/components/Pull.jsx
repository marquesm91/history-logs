import React from 'react';
import Markdown from './Markdown';
import Badge from './Badge';
import getPullMeta from '../utils/getPullMeta';

function Pull({ data, ...props }) {
  const ref = React.useRef();
  const [id, setId] = React.useState('section-' + data.id);
  const { text, bgColor, textColor } = getPullMeta(data);

  React.useLayoutEffect(() => {
    if (ref.current) {
      const position = getElementPosition(ref.current);

      setId(prev => (prev += `-${position}`));
    }
  }, []);

  return (
    <section ref={ref} id={id} className="w-2/3 mt-4">
      <div className="flex flex-row items-center">
        <Badge bgColor={bgColor} textColor={textColor}>
          {text}
        </Badge>
        <p className="text-xl font-medium mb-2">{data.title}</p>
      </div>
      <div className="my-8">
        <Markdown source={data.body} />
      </div>
    </section>
  );
}

function getElementPosition(element) {
  let location = 0;

  if (element.offsetParent) {
    do {
      location += element.offsetTop;
      element = element.offsetParent;
    } while (element);
  }

  return location >= 0 ? location : 0;
}

export default Pull;
