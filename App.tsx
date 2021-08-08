import React from 'react';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Routes } from './src/screens/routes/Index';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8F57FF',
    accent: '#FFF',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes/> 
    </PaperProvider>
     //<SignIn/>   
  );
};