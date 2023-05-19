const breakpoints = {
  xxxl: '1949.9px',
  xxl: '1799.9px',
  xl: '1499.9px',
  xlg: '1399.9px',
  lg: '1199.9px',
  md: '991.9px',
  sm: '768.9px',
  xs: '575.9px',
  xss: '373.9px',
  xsss: '280.9px',
};

const breakpoint = {
  xxxl: `(max-width: ${breakpoints.xxxl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xlg: `(max-width: ${breakpoints.xlg})`,
  lg: `(max-width: ${breakpoints.lg})`,
  md: `(max-width: ${breakpoints.md})`,
  sm: `(max-width: ${breakpoints.sm})`,
  xs: `(max-width: ${breakpoints.xs})`,
  xss: `(max-width: ${breakpoints.xss})`,
  xsss: `(max-width: ${breakpoints.xsss})`,
};

export default breakpoint;
