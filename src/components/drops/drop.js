import h from 'virtual-dom/h';

import {svgSize, svgPath} from '../../constants';

const threshold = .3;

export default function Drop({x, y, scale, blur}, color) {
  if (x < -threshold || x > 1 + threshold || y < - threshold || y > 1 + threshold) {
    throw new Error();
  }
  const style = {
    position: 'absolute',
    top: `-${svgSize * scale / 2}px`,
    left: `-${svgSize * scale / 2}px`,
    width: `${svgSize * scale}px`,
    height: `${svgSize * scale}px`,
    transform: `translate3d(${x * 100}vw, ${y * 100}vh, 0)`,
    webkitFilter: `blur(${blur}px)`
  };
  return h('div', {style}, [
    h('svg', {namespace: "http://www.w3.org/2000/svg", attributes: {viewBox: `0 0 ${svgSize} ${svgSize}`}}, [
      h('path', {namespace: "http://www.w3.org/2000/svg", attributes: {d: svgPath, fill: color}})
    ])
  ]);
}
