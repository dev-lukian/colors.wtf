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

export const hexToRgb = (rgb) => {
  rgb = rgb.replace("#", "");
  const r = parseInt(rgb.substr(0, 2), 16);
  const g = parseInt(rgb.substr(2, 2), 16);
  const b = parseInt(rgb.substr(4, 2), 16);
  return {r, g, b}
}

export const contractRgbToClientRgb = (rgb) => {

  const b = rgb % 1000;
  const rg = Math.floor(rgb / 1000);
  const g = rg % 1000;
  const r = Math.floor(rg / 1000);

  return {r, g, b}
};

export const clientRgbToContractRgb = (rgb) => {

  const rgbSplit = rgb.split(",");
  const r = parseInt(rgbSplit[0], 10);
  const g = parseInt(rgbSplit[1], 10);
  const b = parseInt(rgbSplit[2], 10);

  return (r * 1000000) + (g * 1000) + b;
};

export const rgbToContractRgb = (r, g, b) => {
  return (r * 1000000) + (g * 1000) + b;
};
