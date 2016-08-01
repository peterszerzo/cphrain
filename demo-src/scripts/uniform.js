function generateDrops(n) {
  const drops = [];
  for (let i = 0; i < n; i++) {
    drops.push(generateDrop());
  }
  return drops;
}

function generateDrop() {
  return {
    x: Math.random(),
    y: Math.random(),
    scale: 1,
    blur: 0
  };
}

export default () => {
  console.log('Hi, Mom!');
  cphRain(generateDrops(30), drops => drops, document.getElementById('app'));
}
