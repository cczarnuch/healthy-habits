import React from "react";
import {View, Text, Icon, TextInput, Button} from "react-native";
import { Header, Slider } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from '../../styles/main.js';
import journalBackground from '../../assets/gradient.jpg';

function displayMountainScreen() {
    console.log("return to mountain pressed")

}

function submitEntry(journalResponse, sliderVal){
    console.log("submit entry button pressed")
    console.log("response:", journalResponse, "sliderVal:", sliderVal)
    // Send values to Game Controller
    displayMountainScreen()
}

const JournalGame = ({ navigation }) => {
    const [journalResponse, onChangeText] = React.useState(null);
    const [sliderVal, setSliderValue] = React.useState(0);

    return (
        <SafeAreaProvider>
        <BackgroundImage source={journalBackground} style={styles.img}>
        <View>           
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                barStyle="light-content" // or directly
                rightComponent={{}}
                centerComponent={{
                text: "Journal Entry",
                style: { color: "#FFF", fontSize: 22 }
                }}
                containerStyle={{
                backgroundColor: "#85C3CF",
                justifyContent: "space-around"
                }}
            />
            <Text>Welcome to Journal Entry. This minigame is meant to help you reflect on your day, the good and bad.</Text>
            
            <TextInput 
                style={styles.input} value={journalResponse} onChangeText={onChangeText} placeholder="Enter your thoughts about the day">
            </TextInput>
            
            <View>
                <Text>Rate your overall mood on a scale of 1 to 10. </Text>
                <Slider style={styles.slider}
                        minimumTrackTintColor="#85C3CF"
                        onSlidingComplete={(sliderVal) => setSliderValue(sliderVal)}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={sliderVal}
                ></Slider>
                <Text>{sliderVal}</Text>
            </View>
            
            <Button title="Submit" onPress={() => submitEntry(journalResponse,sliderVal)}/>
       </View>
       </BackgroundImage>
       </SafeAreaProvider>       
    )
}

export default JournalGame