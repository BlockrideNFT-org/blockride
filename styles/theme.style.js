import { extendTheme } from '@chakra-ui/react';
import '@fontsource/vollkorn';
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
    primary: '#1DE7C9',
    secondary: '#0C1F47',
  },
});
