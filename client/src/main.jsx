import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';

const colors = {
  styles: {
    global: {
      body: {
        bgGradient: 'linear(135deg, #2274a5 21px, #e7dfc6 22px, #e7dfc6 24px, transparent 24px, transparent 67px, #e7dfc6 67px, #e7dfc6 69px, transparent 69px), linear-gradient(225deg, #2274a5 21px, #e7dfc6 22px, #e7dfc6 24px, transparent 24px, transparent 67px, #e7dfc6 67px, #e7dfc6 69px, transparent 69px)0 64px',
        bg: '#2274a5',
        bgSize: '64px 128px'
        
      }
      
    }
  },
  colors: {
    brand: {
      100: '#e7dfc6',
      200: '#2274a5'
    }
  }
};

const theme = extendTheme(colors);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
);
