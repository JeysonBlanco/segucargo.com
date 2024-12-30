// Logo exports
export const LOGO_PATHS = {
  default: '/src/assets/logo/logo.svg',
  white: '/src/assets/logo/logo-white.svg',
  dark: '/src/assets/logo/logo-dark.svg',
  icon: '/src/assets/logo/icon.svg'
} as const;

export type LogoVariant = keyof typeof LOGO_PATHS;