import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer, useState } from "react";
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
    const [index, setIndex] = useState(1)
    const [dark, setDark] = useState(false);
    const [diffculty, setDiffculty] = useState(1);
    //const [playerData, setPlayerData] = useState({}); // Stored as {date: {game: result, game: result}...}
    const [playerData, setPlayerData] = useState({ 
      "2021-04-09": {
        "workout": "10",
        //"math": "10",
        "word": "10",
        "memorization": "10",
        //"meditation": "10",
        "journal": "Today sucked"
      },
      "2021-04-10": {
        "workout": "10",
        "math": "10",
        "word": "10",
        //"memorization": "10",
        //"meditation": "10",
        "journal": "I had a great day!"
      }
    });

    const [workoutActive, setWorkoutActive] = useState(true)
    const [mathActive, setMathActive] = useState(true)
    const [wordActive, setWordActive] = useState(true)
    const [memoryActive, setMemoryActive] = useState(true)
    // const [medActive, setMedActive] = useState(true)
    const [journalActive, setJournalActive] = useState(true)

    const handleGame = gameId => {
        switch (gameId) {
            case 1:
                setWorkoutActive(false)
                setDisplay( <WorkoutGame updatePoints={updatePoints} setMain={setDisplay} workoutActive={workoutActive} updatePlayerData={updatePlayerData} />);
                break;
            case 2:
                setMathActive(false);
                setDisplay( <MathGame updatePoints={updatePoints} setMain={setDisplay} mathActive={mathActive} updatePlayerData={updatePlayerData}/>);
                break;
            case 3:
                setWordActive(false);
                setDisplay(<WordGame updatePoints={updatePoints} wordActive={wordActive} updatePlayerData={updatePlayerData} setMain={setDisplay} />);
                break;
            case 4:
                setMemoryActive(false);
                setDisplay(
                  <MemoryGame 
                    updatePoints={updatePoints} 
                    memoryActive={memoryActive}
                    updatePlayerData={updatePlayerData}
                    setIndex={setIndex}
                    setMain={setDisplay}
                    diffculty={diffculty}
                    dark={dark}/>);
                break;
            // case 5:
            //   setMedActive(false)
            //   setDisplay(<MeditationGame updatePoints={updatePoints} />)
            //   break;
            case 6:
                setJournalActive(false);
                setDisplay(<JournalGame updatePoints={updatePoints}  journalActive={journalActive} updatePlayerData={updatePlayerData} />);
                break;
            default:
                setDisplay(true);
        }
    };

    const updatePoints = (number, gameActive) => {
        if (gameActive) {
            setPoints(points + number);
        } else {
            alert('More points cannot be earned for that game today!')
        }
    };

    const updatePlayerData = (game, result, gameActive) => {
        var date = new Date().toISOString().slice(0,10);

        if (playerData[date] === undefined) {
            setPlayerData({...playerData, [date]: {[game]: result}})
        } else {
            playerData[date] = {...playerData[date], [game]: result}
        }

        //playerData = {...playerData, [date]: {[game]: result}}
        //playerData.date.game = result
        console.log(playerData)
    }

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
      <Swiper loop={false} showsPagination={false} index={index}>
        <CalendarPage styles={styles} playerData={playerData}
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
    darkContainer:{
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center"
    },
});

export default App;