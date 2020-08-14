function getPullMeta(data) {
  const isMergedState = data.merged_at !== null;
  const isClosedState = data.merged_at !== null;

  if (isMergedState) {
    return {
      bgColor: 'bg-purple-600',
      textColor: 'text-white',
      text: 'Merged',
    };
  }

  if (isClosedState) {
    return {
      bgColor: 'bg-red-600',
      textColor: 'text-white',
      text: 'Closed',
    };
  }

  return {
    bgColor: 'bg-green-600',
    textColor: 'text-white',
    text: 'Open',
  };
}

export default getPullMeta;
