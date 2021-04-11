import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
    //const [playerData, setPlayerData] = useState({}); // Stored as {date: {game: result, game: result}...}
    const [playerData, setPlayerData] = useState({ 
      "2021-04-10": {
        "jnal": "Yvygnbugbth",
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
                setDisplay(<MemoryGame updatePoints={updatePoints} />);
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

    return display === true ? ( 
        <Swiper loop={false} showsPagination={false} index={1} >
            <CalendarPage styles={styles} playerData={playerData} />
            <MountainView styles={styles} points={points} />
            <GameDisplay styles={styles} handleGame={handleGame} /> 
        </ Swiper>) : (display);
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