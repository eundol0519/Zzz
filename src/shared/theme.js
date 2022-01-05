const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  ssmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  // titleSize: calcRem(50),
};

const lineHeight = {
  ssmall: "18px",
  small: "22px",
  base: "24px",
  lg: "27px",
  xl: "30px",
  xxl: "22px",
  xxxl: "34px",
  // titleSize: calcRem(50),
};

const fontWeight = {
  Regular: 400,
  Medium: 500,
  Bold: 700,
};

const colors = {
  main_1: "#FBC037",
  main_2: "#FCCD5F",
  main_3: "#FCD371",
  main_4: "#FDE09B",
  main_5: "#FEECC3",
  bg: "#101340",
  back: "#272a52",
  white: "#ffffff",
  gray_1: "#f8f8f8",
  gray_2: "#f3f3f3",
  gray_3: "#ececec",
  gray_4: "#dadada",
  gray_5: "#c4c4c4",
  gray_6: "#a1a1a1",
  gray_7: "#696969",
  gray_8: "#3b3b3b",
  gray_9: "#222222",
  black: "#000000",
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(20),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(20),
};

// const interval = {
//   base: calcRem(50),
//   lg: calcRem(100),
//   xl: calcRem(150),
//   xxl: calcRem(200),
// };

// const verticalInterval = {
//   base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
// };

const horizontalityInterval = {
  small: `0 ${calcRem(16)}`,
  base: `0 ${calcRem(20)}`,
};

// const deviceSizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "450px",
//   tablet: "768px",
//   tabletL: "1024px",
// };

// const device = {
//   mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
//   mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
//   mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
//   tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
//   tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
// };

const theme = {
  fontSizes,
  lineHeight,
  fontWeight,
  colors,
  paddings,
  margins,
  horizontalityInterval,
  // deviceSizes,
  // device,
  // interval,
  // verticalInterval,
  // gradient,
};

export default theme;
