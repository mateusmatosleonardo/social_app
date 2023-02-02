import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/Routes/Routes';
import { theme } from './src/theme/theme';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from '@expo-google-fonts/rubik';

export default function App() {

  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style="dark" />
      </ThemeProvider >
    </React.Fragment >
  );
}