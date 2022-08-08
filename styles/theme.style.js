import { extendTheme } from '@chakra-ui/react';
import '@fontsource/vollkorn';
import '@fontsource/vollkorn/900.css';
import '@fontsource/poppins';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.400',
        color: 'white',
      },

      button: { fontFamily: `Poppins, san-serif` },
    },
  },
  fonts: {
    heading: `Vollkorn, serif`,
    body: `Vollkorn, serif`,
  },
  colors: {
    primary: {
      50: '#dbfff9',
      100: '#b2f9ee',
      200: '#87f4e3',
      300: '#5beed8',
      400: '#30e9cd',
      500: '#1DE7C9',
      // 500: '#16cfb4',
      600: '#04a18c',
      700: '#007364',
      800: '#00463c',
      900: '#001914',
    },
    secondary: '#0C1F47',
  },
});
