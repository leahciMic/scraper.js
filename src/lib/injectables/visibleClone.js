module.exports = function visibleCloneFactory() {
  const isNodeVisible = elem => Boolean(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

  const cloneChildrenIfVisible = (/** @type {HTMLElement} */ from, /** @type {HTMLElement} */ to) => {
    if (from.nodeType === Node.ELEMENT_NODE && !isNodeVisible(from)) {
      return;
    }

    const clone = from.cloneNode(false);

    to.appendChild(clone);

    from.childNodes.forEach((node) => {
      cloneChildrenIfVisible(node, clone);
    });
  };

  const visibleClone = (/** @type {HTMLElement} */ node) => {
    const root = document.createElement('div');
    cloneChildrenIfVisible(node, root);
    return root;
  };

  return visibleClone;
};
