import React from 'react';
import { StyleSheet,WebView,StatusBar} from 'react-native';



export default function App() {
  return (
    <WebView
    source={{ uri: 'http://orders.gamaartsfoundation.com/mob' }}
    style={{ marginTop: StatusBar.currentHeight }}
  />
  );
}

