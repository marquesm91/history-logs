import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

function Heading(props) {
  const className = getHeadingClassNames(props.level);

  return <p className={className}>{props.children}</p>;
}

function getHeadingClassNames(level) {
  const baseClassNames =
    'font-bold border-b border-solid border-gray-300 pb-1 mt-8 mb-6';

  switch (level) {
    case 2:
    default:
      return baseClassNames + ' text-2xl';
  }
}

function InlineCode(props) {
  return <code className="rounded-lg bg-gray-200 p-1">{props.children}</code>;
}

function Link(props) {
  return (
    <a
      className="text-indigo-500 font-medium"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}

function Paragraph(props) {
  return <p className="mb-6">{props.children}</p>;
}

function TableCell(props) {
  let className = 'py-2 px-4 border border-solid border-gray-400';

  if (props.isHeader) {
    className += ' font-bold';
  }

  return (
    <td className={className} align={props.align}>
      {props.children}
    </td>
  );
}

function Markdown({ source }) {
  return (
    <ReactMarkdown
      source={source}
      escapeHtml={false}
      renderers={{
        inlineCode: InlineCode,
        heading: Heading,
        link: Link,
        paragraph: Paragraph,
        tableCell: TableCell,
      }}
    />
  );
}

export default Markdown;
