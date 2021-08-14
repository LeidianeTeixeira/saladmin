import React from 'react';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AuthContext } from './src/hooks/auth';

import { AuthProvider} from './src/hooks/auth';
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
      <AuthProvider>
      <Routes/> 
      </AuthProvider>
    </PaperProvider>
     //<SignIn/>   
  );
};