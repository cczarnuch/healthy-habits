import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper/src";
import CalendarPage from "./src/components/Calendar";
import MountainView from "./src/components/MountainView";
import GameDisplay from "./src/components/GameDisplay";
import { StyleSheet, Text, View } from "react-native";
import WorkoutGame from "./src/components/Games/WorkoutGame";
import MathGame from "./src/components/Games/MathGame";
import MemoryGame from "./src/components/Games/MemoryGame";
import JournalGame from "./src/components/Games/JournalGame";
import WordGame from "./src/components/Games/WordGame";

const App = () => {
  const [display, setDisplay] = useState(true);
  const [points, setPoints] = useState(0);
  const [dark, setDark] = useState(false);
  const [diffculty, setDiffculty] = useState(1);

  const handleGame = gameId => {
    switch (gameId) {
      case 1:
        setDisplay(
          <WorkoutGame updatePoints={updatePoints} setMain={setDisplay} />
        );
        break;
      case 2:
        setDisplay(<MathGame updatePoints={updatePoints} setMain={setDisplay}/>);
        break;
      case 4:
        setDisplay(
          <MemoryGame 
            updatePoints={updatePoints} 
            diffculty={diffculty}
            dark={dark}/>);
        break;
      case 6:
        setDisplay(<JournalGame updatePoints={updatePoints} />);
        break;
      case 3:
        setDisplay(<WordGame updatePoints={updatePoints} />);
        break;
      default:
        setDisplay(true);
    }
  };

  const updatePoints = number => {
    setPoints(points + number);
  };

  const updateSetting = (setting, data) => {
    if (setting === "theme"){
      setDark(() => {
        console.log("from App ",data);
        return data;
      });
    } else if (setting === "diff"){
      setDiffculty(() => {
        console.log("from App ",data);
        return data;
      });
    }
    //console.log(diffculty)
  }

  return display === true ? (
    <Swiper loop={false} showsPagination={false} index={1}>
      <CalendarPage styles={styles} 
      updateSetting={updateSetting} dark={dark} diffculty={diffculty}/>
      <MountainView styles={styles} points={points} 
      updateSetting={updateSetting} dark={dark} diffculty={diffculty}/>
      <GameDisplay styles={styles} handleGame={handleGame}
      updateSetting={updateSetting} dark={dark} diffculty={diffculty}/>
    </Swiper>
  ) : (
    display
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;
