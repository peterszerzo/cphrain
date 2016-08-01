import h from 'virtual-dom/h';

import Drop from './drop';

export default function Drops(drops, {backgroundColor, dropColor}) {
  if (!(drops instanceof Array)) {
    throw new Error();
  }
  const style= {
    backgroundColor: backgroundColor,
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0
  };
  return h('div', {style}, [
    drops.map(drop => Drop(drop, dropColor))
  ]);
}
