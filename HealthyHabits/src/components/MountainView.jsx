import React, { useState } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/main.js';
import m1 from '../assets/mountain1.png'; import m2 from '../assets/mountain2.png'; import m3 from '../assets/mountain3.png'; import m4 from '../assets/mountain4.png'; import m5 from '../assets/mountain5.png'; import m6 from '../assets/mountain6.png'; import m7 from '../assets/mountain7.png';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Icon, Overlay } from "react-native-elements";
import { ImageBackground } from 'react-native';
import Setting from '../components/SettingScreen';

// function displaySettingsScreen() {
//     // TODO: add navigation between pages
//     console.log("settings button pressed")
// }

const MountainView = () => {

    const [visible, setVisible] = useState(false);
    var score = 0;
    var image = m1;

    const displaySettingsScreen = () => {
        console.log("toggle pressed")
        setVisible(!visible);
    };

    const switchMountainImg = () => {
        console.log("switch mountain image")
    }

    return (
        <SafeAreaProvider>
            <ImageBackground source={image} style={styles.img}>            
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                barStyle="light-content" // or directly
                rightComponent={<Icon name="settings" color="white" onPress={displaySettingsScreen}></Icon> }
                centerComponent={{
                text: "Your Progression",
                style: { color: "#FFF", fontSize: 22 }
                }}
                containerStyle={{
                backgroundColor: "transparent",
                justifyContent: "space-around"
                }}
            />
            
            <Text style={styles.score}>Score: {score}</Text>
    
            </ImageBackground>

            {/* Settings Overlay toggled when settings Icon is clicked */}
            <Overlay isVisible={visible} fullScreen={true}>
                <Header
                    statusBarProps={{ barStyle: "light-content" }}
                    barStyle="light-content" 
                    rightComponent={<Icon  name="close" color="white" style={styles.back} size={30} onPress={displaySettingsScreen}></Icon>}
                    centerComponent={{text: "Settings",style: { color: "#FFF", fontSize: 22 }}}
                    containerStyle={{backgroundColor: "#85CBCC",justifyContent: "space-around", 
                    borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                />
                <Setting></Setting>

            </Overlay>

        </SafeAreaProvider>
    )
}

export default MountainView