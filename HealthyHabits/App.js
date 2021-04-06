import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Swiper from "react-native-swiper/src";
import CalendarPage from "./src/components/Calendar";
import MountainView from "./src/components/MountainView";
import GameDisplay from "./src/components/GameDisplay";
import { StyleSheet, Text, View } from "react-native";
import WorkoutGame from "./src/components/Games/WorkoutGame";
import MathGame from './src/components/Games/MathGame';
import MemoryGame from './src/components/Games/MemoryGame';
import JournalGame from './src/components/Games/JournalGame';

const App = () => {  
  const [display, setDisplay] = useState(true)

  const handleGame = (gameId) => {
    switch(gameId) {
      case 1:
        setDisplay(<WorkoutGame />)
        break
      case 2:
        setDisplay(<MathGame />)
        break
      case 4:
        setDisplay(<MemoryGame />)
        break
      case 6:
        setDisplay(<JournalGame />)
        break
      default:
        setDisplay(true)
    }
  }

  return (
    display === true ? <Swiper loop={false} showsPagination={false} index={1}>
      <CalendarPage styles={styles} />
      <MountainView styles={styles} />
      <GameDisplay styles={styles} handleGame={handleGame} />
    </Swiper> : display
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
