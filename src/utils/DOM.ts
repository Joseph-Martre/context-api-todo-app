export const isClickInsideNodeRef = (
  nodeRef: React.RefObject<HTMLElement | null>,
  e: MouseEvent,
): boolean => {
  const checkedNode = nodeRef.current;
  if (!checkedNode) return false;
  const targetNode = e.target;
  if (!(targetNode instanceof Node)) return false;
  return checkedNode.contains(targetNode);
};
