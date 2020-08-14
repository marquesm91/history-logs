import React from 'react';
import Markdown from './Markdown';
import Badge from './Badge';
import getPullMeta from '../utils/getPullMeta';

function Pull({ data, ...props }) {
  const { text, bgColor, textColor } = getPullMeta(data);

  return (
    <section id={'section-' + data.id} className="w-2/3 mt-4">
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

export default Pull;
