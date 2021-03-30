import React, { useState } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/main.js';
import mPicture from '../assets/mnt.jpg';
import manPicture from '../assets/hike.png';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Icon } from "react-native-elements";
import { ImageBackground } from 'react-native';

function displaySettingsScreen() {
    // TODO: add navigation between pages
    console.log("settings button pressed")
}

const MountainView = () => {
    return (
        <SafeAreaProvider>
            <ImageBackground source={mPicture} style={styles.img}>            
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                barStyle="light-content" // or directly
                rightComponent={<Icon name="settings" color="white" onPress={() => displaySettingsScreen()}></Icon> }
                centerComponent={{
                text: "Your Progression",
                style: { color: "#FFF", fontSize: 22 }
                }}
                containerStyle={{
                backgroundColor: "transparent",
                justifyContent: "space-around"
                }}
            />
            <Image source={manPicture} style={styles.man}></Image>
            {/* <Icon name="circle" color="red" style={styles.checkpoint}></Icon> */}
            
            </ImageBackground>
        </SafeAreaProvider>
    )
}

export default MountainView