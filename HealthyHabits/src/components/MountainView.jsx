import React, { useState, useEffect } from 'react';
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

const MountainView = (props) => {

    const [visible, setVisible] = useState(false);
    var [score, setScore] = useState(props.points);
    var [image, setImage] = useState(m2);

    const displaySettingsScreen = () => {
        console.log("toggle pressed")
        setVisible(!visible);
    };

    useEffect(() => {
        Image();
      }, [props.points]);

    function Image() {
        if (props.points < 20) {
            setImage(m2)
        } 
        else if (props.points >= 20 && props.points < 40) { setImage(m3) }
        else if (props.points >=40 && props.points < 60) { setImage(m4) }
        else if (props.points >= 60 && props.points < 80) { setImage(m5) }
        else if (props.points >= 80 && props.points < 100) { setImage(m6) }
        else { setImage(m7) }
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
            <Overlay isVisible={visible} fullScreen={true} overlayStyle={[props.dark ? styles.darkContainer : styles.container]}>
                <Header
                    statusBarProps={{ barStyle: "light-content" }}
                    barStyle="light-content" 
                    rightComponent={<Icon  name="close" color="white" size={30} onPress={displaySettingsScreen}></Icon>}
                    centerComponent={{text: "Settings",style: { color: "#FFF", fontSize: 22 }}}
                    containerStyle={{backgroundColor: "#85CBCC",justifyContent: "space-around"}}
                />
                <Setting 
                    updateSetting={props.updateSetting}
                    dark={props.dark} diffculty={props.diffculty}>
                </Setting>

            </Overlay>

        </SafeAreaProvider>
    )
}

export default MountainView