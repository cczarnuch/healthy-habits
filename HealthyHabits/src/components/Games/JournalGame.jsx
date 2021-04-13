import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Header, Slider, Icon } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from '../../styles/main.js';
import journalBackground from '../../assets/gradient.jpg';
import smiley from '../../assets/smileyrating.png';

const JournalGame = ({ updatePoints, journalActive, updatePlayerData, setMain, setIndex }) => {
    const [journalResponse, onChangeText] = React.useState(null);
    const [sliderVal, setSliderValue] = React.useState(0);

    function submitEntry(journalResponse, sliderVal) {
        console.log("submit entry button pressed")
        // console.log("response:", journalResponse, "sliderVal:", sliderVal)
        // Send values to Game Controller
        updatePlayerData('journal', [journalResponse, sliderVal], journalActive)
        updatePoints(5, journalActive)
        setIndex(2)
        setMain(true)
    }

    return (
        <SafeAreaProvider>
            <BackgroundImage source={journalBackground} style={styles.img}>
                <View>
                    <Header
                        statusBarProps={{ barStyle: "light-content" }}
                        barStyle="light-content" // or directly
                        leftComponent={<Icon name="chevron-left" color="white" onPress={() => setMain(true)}></Icon>}
                        centerComponent={{
                            text: "Journal Entry",
                            style: { color: "#FFF", fontSize: 22 }
                        }}
                        containerStyle={{
                            backgroundColor: "#A7D676",
                            justifyContent: "space-around"
                        }}
                    />
                    <Text style={{ fontSize: 16, textAlign: 'center', backgroundColor: '#85CBCC', color: 'white' }}>Welcome to Journal Entry</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10 }}>This minigame is meant to help you reflect on your day, the good and the bad.</Text>

                    <TextInput
                        style={styles.input} value={journalResponse} onChangeText={onChangeText} placeholder="Enter a reflection about your day.">
                    </TextInput>


                    <View>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10 }}>Rate your overall mood on a scale of 1 to 10. </Text>
                        <Image source={smiley} style={styles.smile}></Image>
                        <Slider style={styles.slider}
                            minimumTrackTintColor={styles.slider.color}
                            maximumTrackTintColor={styles.slider.tintColor}
                            thumbTintColor={styles.slider.color}
                            onValueChange={(sliderVal) => setSliderValue(sliderVal)}
                            minimumValue={0}
                            maximumValue={10}
                            step={1}
                            value={sliderVal}
                        ></Slider>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>Rating: {sliderVal}</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.bigButton} onPress={() => submitEntry(journalResponse, sliderVal)}>
                        <Text style={styles.buttonTextStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </BackgroundImage>
        </SafeAreaProvider>
    )
}

export default JournalGame