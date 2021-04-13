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
import MeditationGame from "./src/components/Games/MeditationGame";

const App = () => {
	const [display, setDisplay] = useState(true);
	const [points, setPoints] = useState(58);
	const [index, setIndex] = useState(1);
	const [dark, setDark] = useState(false);
	const [diffculty, setDiffculty] = useState(1);
	const [WordGameNum, setWordGameNum] = useState(0);

	const [playerData, setPlayerData] = useState({
		"2021-04-09": {
			workout: "10",
			//"math": "10",
			word: "10",
			memorization: "10",
			//"meditation": "10",
			journal: ["Today sucked", 3]
		},
		"2021-04-10": {
			workout: "10",
			math: "10",
			word: "10",
			//"memorization": "10",
			//"meditation": "10",
			journal: ["I had a great day!", 9]
		}
	});

	const [workoutActive, setWorkoutActive] = useState(true);
	const [mathActive, setMathActive] = useState(true);
	const [wordActive, setWordActive] = useState(true);
	const [memoryActive, setMemoryActive] = useState(true);
	const [medActive, setMedActive] = useState(true);
	const [journalActive, setJournalActive] = useState(true);

	const handleGame = gameId => {
		switch (gameId) {
			case 1:
				setDisplay(
					<WorkoutGame
						updatePoints={updatePoints}
						setMain={setDisplay}
						workoutActive={workoutActive}
						updatePlayerData={updatePlayerData}
						setWorkoutActive={setWorkoutActive}
						setIndex={setIndex}
					/>
				);
				break;
			case 2:
				setDisplay(
					<MathGame
						updatePoints={updatePoints}
						setMain={setDisplay}
						mathActive={mathActive}
						updatePlayerData={updatePlayerData}
						setMathActive={setMathActive}
						setIndex={setIndex}
					/>
				);
				break;
			case 3:
				setDisplay(
					<WordGame
						updatePoints={updatePoints}
						wordActive={wordActive}
						updatePlayerData={updatePlayerData}
						setIndex={setIndex}
						setMain={setDisplay}
						setWordGameNum={setWordGameNum}
						WordGameNum={WordGameNum}
						setWordActive={setWordActive}
					/>
				);
				break;
			case 4:
				setDisplay(
					<MemoryGame
						updatePoints={updatePoints}
						memoryActive={memoryActive}
						updatePlayerData={updatePlayerData}
						setIndex={setIndex}
						setMain={setDisplay}
						diffculty={diffculty}
						dark={dark}
						setMemoryActive={setMemoryActive}
					/>
				);
				break;
			case 5:
				setDisplay(
					<MeditationGame
						updatePoints={updatePoints}
						medActive={medActive}
						updatePlayerData={updatePlayerData}
						setIndex={setIndex}
						setMain={setDisplay}
						setMemoryActive={setMemoryActive}
					/>
				);
				break;
			case 6:
				setDisplay(
					<JournalGame
						updatePoints={updatePoints}
						journalActive={journalActive}
						updatePlayerData={updatePlayerData}
						setMain={setDisplay}
						setJournalActive={setJournalActive}
						setIndex={setIndex}
					/>
				);
				break;
			default:
				setDisplay(true);
		}
	};

	const updatePoints = (number, gameActive) => {
		if (gameActive) {
			setPoints(points + number);
		} else {
			alert("More points cannot be earned for that game today!");
		}
	};

	const updatePlayerData = (game, result, gameActive) => {
		var date = new Date().toISOString().slice(0, 10);

		if (gameActive) {
			if (playerData[date] === undefined) {
				setPlayerData({ ...playerData, [date]: { [game]: result } })
			} else {
				playerData[date] = { ...playerData[date], [game]: result }
			}
		}
	}

	const updateSetting = (setting, data) => {
		if (setting === "theme") {
			setDark(() => {
				return data;
			});
		} else if (setting === "diff") {
			setDiffculty(() => {
				return data;
			});
		}
	};

	return display === true ? (
		<Swiper loop={false} showsPagination={false} index={index}>
			<CalendarPage
				styles={styles}
				playerData={playerData}
				updateSetting={updateSetting}
				dark={dark}
				diffculty={diffculty}
			/>
			<MountainView
				styles={styles}
				points={points}
				updateSetting={updateSetting}
				dark={dark}
				diffculty={diffculty}
			/>
			<GameDisplay
				styles={styles}
				handleGame={handleGame}
				updateSetting={updateSetting}
				dark={dark}
				diffculty={diffculty}
			/>
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
	darkContainer: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center"
	}
});

export default App;
