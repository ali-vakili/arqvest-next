
const calculateSectionYTransition = (sectionStartOffset, maxScrollHeight, smoothScrollBarOffset) => {

  const offset = (smoothScrollBarOffset - sectionStartOffset) / (maxScrollHeight - sectionStartOffset);
  return offset ? parseFloat(offset.toFixed(2) * 100) : 100;
}

export { calculateSectionYTransition }