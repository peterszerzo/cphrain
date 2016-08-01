function generateDrops(n) {
  return [
    {
      x: .5,
      y: .5,
      scale: 1,
      blur: 0
    }
  ];
}

export default () => {
  cphRain(generateDrops(30), drops => drops, document.getElementById('app'));
}
