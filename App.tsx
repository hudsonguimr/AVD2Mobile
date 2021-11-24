
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Name} from './src/pages/Name';
import {Home} from './src/pages/Home';
import {Congrats} from './src/pages/Congrats';



export default function App() {
  return (
    <View style={styles.container}>
      <Congrats/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
