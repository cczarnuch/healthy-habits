import React from "react";
import {View, Text, Icon} from "react-native";
import { Header } from "react-native-elements";
import styles from '../../styles/main.js';
//import LinearGradient from 'react-native-linear-gradient';

function displayMountainScreen() {
    // TODO: navigation
    console.log("return to mountain pressed")
}

const JournalGame = () => {
    return (
        <View>           
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                barStyle="light-content" // or directly
                //rightComponent={<Icon name="settings" color="white" onPress={() => displayMountainScreen()}></Icon> }
                centerComponent={{
                text: "Your Progression",
                style: { color: "#FFF", fontSize: 22 }
                }}
                containerStyle={{
                backgroundColor: "transparent",
                justifyContent: "space-around"
                }}
            />
            <Text>This is the Journal Screen</Text>
       </View>
    )
}

export default JournalGame