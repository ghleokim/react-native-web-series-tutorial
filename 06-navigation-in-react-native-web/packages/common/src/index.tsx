/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { CounterStoreContext } from './stores/CounterStore';
import { Router } from './Router';

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.sectionContainer}>
      <Router />
    </View>
  )
})

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  halfButton: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});
