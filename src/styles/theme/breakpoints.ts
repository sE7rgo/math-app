export enum Breakpoint {
  Mobile = 'sm',
  Tablet = 'md',
  Desktop = 'lg',
  DesktopLarge = 'xl',
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 375, // mobile
    md: 768, // tablet
    lg: 1280, // laptop
    xl: 1440, // desktop
  },
};
