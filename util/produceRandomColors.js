const randomColors = (n) => {
  let colorArray = [];

  for (let i = 0; i < n; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    let randomAttribues = [];

    const COLOR_LEVELS = ['', 'primary', 'secondary'];
    const COLOR_TYPES = ['', 'html'];

    let color = {
      name: 'Color name',
      rgb: {
        r: r,
        g: g,
        b: b,
      },
      owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58',
    };

    colorArray.push(color);
  }
};

randomColors(100);
