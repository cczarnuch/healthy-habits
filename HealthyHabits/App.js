import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper/src'
import Calendar from './src/components/Calendar'
import MountainView from './src/components/MountainView'
import GameDisplay from './src/components/GameDisplay'
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <Swiper
      loop={false}
      showsPagination={false}
      index={1}
    >
      
      <Calendar styles={styles}/>
      <MountainView styles={styles}/>
      <GameDisplay styles={styles}/>   
    </Swiper>
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

export default App