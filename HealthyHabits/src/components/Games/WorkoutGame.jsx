import React, { useState, useEffect } from "react";
import {Text, View, Image, Button } from "react-native"; // Image will change to video

import jumpingJacks from '../../assets/workouts/jj.png'
import planks from '../../assets/workouts/p.png'
import pushUps from '../../assets/workouts/pu.png'
import sitUps from '../../assets/workouts/su.png'

const WorkoutGame = (props) => {
    const [video, setVideo] = useState(null)

    useEffect(() => {
        switch(Math.round(Math.random() * 3)) {
            case 0:
                setVideo(jumpingJacks)
                break
            case 1:
                setVideo(planks)
                break
            case 2:
                setVideo(pushUps)
                break
            case 3:
                setVideo(sitUps)
                break
        }
    })

    return (
        <View>
            <Image source={video} />
            <Button title='Start' />    
        </View>
    )
}

export default WorkoutGame