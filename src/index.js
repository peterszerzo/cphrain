import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import Error from './components/error/error';
import Drops from './components/drops/drops';
import {style} from './constants';

export default function getRain(initialDrops, step, container) {

  let isError = false;

  function rain(drops, rootNode, previousTree) {
    if (isError) {
      window.requestAnimationFrame(() => {
        rain(drops, rootNode, previousTree);
      });
      return;
    }
    let currentTree;
    try {
      currentTree = Drops(drops, style);
    } catch(err) {
      currentTree = Error();
      isError = true;
      setTimeout(() => {
        isError = false;
      }, 5000);
    }
    const patches = previousTree ? diff(previousTree, currentTree) : null;
    const updateDom = previousTree
      ?
      (next) => {
        const newRootNode = patch(rootNode, patches);
        next(newRootNode);
      }
      :
      (next) => {
        container.innerHTML = '';
        const newRootNode = createElement(currentTree);
        container.appendChild(newRootNode);
        next(newRootNode);
      };
    window.requestAnimationFrame(() => {
      updateDom((rootNode) => {
        rain(step(drops), rootNode, currentTree);
      });
    });
  }

  rain(initialDrops, null, null);
}
