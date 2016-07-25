function generateDrop(isTop) {
  const isUpward = Math.random() < .1;
  const z = Math.random() * 2 - 1;
  return {
    x: Math.random(),
    y: isTop ? (isUpward ? 1.1 : -.1) : Math.random(),
    scale: z > 0 ? (1 + z) : (1 + z / 2),
    blur: Math.floor(6 * Math.abs(z)),
    v: (isUpward ? -1 : 1) * (0.008 + 0.006 * z)
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
  if ((drop.v > 0 && drop.y > 1.1) || (drop.v < 0 && drop.y < -.1)) {
    return generateDrop(true);
  }
  return {
    scale: drop.scale,
    blur: drop.blur,
    x: drop.x,
    y: drop.y + drop.v,
    v: drop.v
  };
}

function stepDrops(drops) {
  return drops.map(stepDrop);
}

export default () => {
  console.log('Hi, Mom!');
  cphRain(generateInitialDrops(30), stepDrops, document.getElementById('app'));
}
