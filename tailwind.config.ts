import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    screens: {
      xs: '500px',
      sm: '768px',
      md: '1024px',
      lg: '1366px',
      xl: '1600px',
      xxl: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        header: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        page: '82rem',
      },
    },
  },
}
