import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';

const colors = {
  styles: {
    global: {
      body: {
        bg: '#d3d3d3'
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
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
