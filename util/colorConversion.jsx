export const getCssRgb = (rgb) => {
  return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)';
};

export const getTextRgb = (rgb) => {
  return '(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
};

export const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

export const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
