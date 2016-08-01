function generateDrop(isTop) {
  const depthRandom = Math.random();
  const directionRandom = Math.random();
  const dir = directionRandom < .1 ? -1 : 1;
  const y = isTop ? (directionRandom < .05 ? 1.1 : -.1) : Math.random();
  return {
    x: Math.random(),
    y: y,
    scale: (depthRandom <= 1/3) ? 2/3 : (depthRandom < 2/3 ? 1 : 1.5),
    blur: (depthRandom <= 1/3 || depthRandom > 2/3) ? 3 : 0,
    dir: dir
  };
}

function generateInitialDrops(n) {
  const drops = [];
  for (let i = 0; i < n; i++) {
    drops.push(generateDrop(false));
  }
  return drops;
}

function stepDrop(drop) {
  if (drop.y > 1.1 || drop.y < -.1) {
    return generateDrop(true);
  }
  return {
    scale: drop.scale,
    blur: drop.blur,
    x: drop.x,
    y: drop.y + .003 * drop.scale * drop.dir,
    dir: drop.dir
  };
}

function stepDrops(drops) {
  return drops.map(stepDrop);
}

export default () => {
  cphRain(generateInitialDrops(30), stepDrops, document.getElementById('app'));
}
