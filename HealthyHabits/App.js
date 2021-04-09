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
  const [points, setPoints] = useState(0)

  const handleGame = (gameId) => {
    switch(gameId) {
      case 1:
        setDisplay(<WorkoutGame updatePoints={updatePoints} setMain={setDisplay} />)
        break
      case 2:
        setDisplay(<MathGame updatePoints={updatePoints} />)
        break
      case 4:
        setDisplay(<MemoryGame updatePoints={updatePoints} />)
        break
      case 6:
        setDisplay(<JournalGame updatePoints={updatePoints} />)
        break
      default:
        setDisplay(true)
    }
  }

  const updatePoints = (number) => {
    setPoints(points + number)
  }

  return (
    display === true ? <Swiper loop={false} showsPagination={false} index={1}>
      <CalendarPage styles={styles} />
      <MountainView styles={styles} points={points} />
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
