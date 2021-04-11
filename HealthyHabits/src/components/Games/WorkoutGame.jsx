import { setStatusBarTranslucent } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native"; // Image will change to video
import useTimer from '../hooks/useTimer';
import { SafeAreaProvider } from "react-native-safe-area-context";

import jumpingJacks from '../../assets/workouts/jj.png'
import planks from '../../assets/workouts/p.png'
import pushUps from '../../assets/workouts/pu.png'
import sitUps from '../../assets/workouts/su.png'

const WorkoutGame = ({ setMain, updatePoints, workoutActive, updatePlayerData }) => {
  const [video, setVideo] = useState(null)
  const [repNumber, setRepNumber] = useState(1)
  const MAX_repNumber = 2

  const [display, setDisplay] = useState('')
  const [screen, setScreen] = useState(true)
  
  const { timer, isActive, handleStart } = useTimer(2)

  useEffect(() => {
    switch(Math.round(Math.random() * 3)) {
      case 0:
        setVideo(jumpingJacks)
        setDisplay('Jumping Jacks!')
        break
      case 1:
        setVideo(planks)
        setDisplay('Plank!')
        break
      case 2:
        setVideo(pushUps)
        setDisplay('Push Ups!')
        break
      case 3:
        setVideo(sitUps)
        setDisplay('Sit Ups!')
        break
    }
  }, [])

  const handleContinue = () => {
    if (repNumber !== MAX_repNumber) {
      handleStart()
      setRepNumber(repNumber + 1)
    } else {
      updatePoints(10, workoutActive)
      updatePlayerData('workout', 10)
      setMain(true)
    }
  }

  return (
    <SafeAreaProvider style={styles.bg}>
      { screen ? <View>
        <Image style={styles.video} source={video} />
        <Text style={styles.txt}>{display}</Text>
        <Button title='Start' onPress={() => {
          setScreen(false)
          handleStart()
        }} />
      </View> : <View>
        <Image style={styles.video} source={video} />
        <Text style={styles.txt}>{formatTime(timer)}</Text>
        <Button title={repNumber !== MAX_repNumber ? 'Continue' : 'End Workout'}
          disabled={isActive}
          onPress={handleContinue} />
      </View> }
    </SafeAreaProvider>
  )
}

const formatTime = (timer) => {
  const gSecs = `0${(timer % 60)}`.slice(-2)
  const mins = `${Math.floor(timer / 60)}`
  const gMins = `0${mins % 60}`.slice(-2)

  return `${gMins} : ${gSecs}` 
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 80,
    textAlign: 'center',
    marginTop: '30%'
  },
  video: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  but: {
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  bg: {
    backgroundColor: '#e7e0df'
  }
})

export default WorkoutGame