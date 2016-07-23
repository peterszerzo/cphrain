import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import Error from './components/error/error';
import Drops from './components/drops/drops';
import {style} from './constants';

export default function getRain(container) {

  let previousTree;
  let rootNode;

  return function rain(drops) {
    let tree;
    try {
      tree = Drops(drops, style);
    } catch(err) {
      tree = Error();
    }
    if (previousTree) {
      let patches = diff(previousTree, tree);
      window.requestAnimationFrame(() => {
        rootNode = patch(rootNode, patches);
      });
    } else {
      container.innerHTML = '';
      rootNode = createElement(tree);
      window.requestAnimationFrame(() => {
        container.appendChild(rootNode);
      });
    }
    previousTree = tree;
  }
}
