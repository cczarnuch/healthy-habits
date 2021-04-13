import React, { useRef } from "react";
import { Animated, View, Text, TouchableOpacity } from "react-native";
import { Header, Slider, Icon } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from '../../styles/main.js';
import meditationBackground from '../../assets/gradient.jpg';


class MeditationGame extends React.Component {
    constructor(props) {
        super(props);
        this.fading = this.fading.bind(this);
        this.calculatePoints = this.calculatePoints.bind(this);
        this.handleBack = this.handleBack.bind(this);

        this.fadeAnim = new Animated.Value(1);
        this.sizeAnim = new Animated.Value(1);
        this.state = {
            sliderVal: 1,
            buttonText: "Start",
            complete: false
        };
    }

    fading() {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(this.fadeAnim, {
                        toValue: 0.2,
                        duration: 5000,
                        useNativeDriver: true
                    }),
                    Animated.timing(this.fadeAnim, {
                        toValue: 1,
                        duration: 5000,
                        useNativeDriver: true
                    })
                ]),
                Animated.sequence([
                    Animated.timing(this.sizeAnim, {
                        toValue: 0.7,
                        duration: 5000,
                        useNativeDriver: true
                    }),
                    Animated.timing(this.sizeAnim, {
                        toValue: 1,
                        duration: 5000,
                        useNativeDriver: true
                    })
                ])
            ]),
            {
                iterations: this.state.sliderVal * 3
            }
        ).start(this.calculatePoints);
    }

    calculatePoints() {
        if (this.state.complete === false) {
            this.props.updatePoints(10, this.props.medActive);
            this.props.updatePlayerData('meditation', 10, this.props.medActive);
            this.state.complete = true;
            console.log("Points added: 10");
        }
    }

    handleBack() {
        this.props.setIndex(2);
        this.props.setMain(true);
    }

    render() {
        return (
            <SafeAreaProvider>
                <BackgroundImage source={meditationBackground} style={styles.img}>
                    <View style={{ alignItems: 'center' }} >
                        <Header
                            statusBarProps={{ barStyle: "light-content" }}
                            barStyle="light-content" // or directly
                            leftComponent={<Icon name="chevron-left"
                                color="white"
                                size={30}
                                onPress={this.handleBack}>
                            </Icon>}
                            rightComponent={{}}
                            centerComponent={{
                                text: "Meditation",
                                style: { color: "#FFF", fontSize: 22 }
                            }}
                            containerStyle={{
                                backgroundColor: "#FBC78D",
                                justifyContent: "space-around"
                            }}
                        />
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10 }}>Take some time to breathe, lowering your heart rate can lower your stress level throughout the day.</Text>


                        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 50 }}>
                            <Animated.View
                                style={[
                                    fadingContainer,
                                    {
                                        opacity: this.fadeAnim, // Bind opacity to animated value
                                        transform: [
                                            {
                                                scaleX: this.sizeAnim
                                            },
                                            {
                                                scaleY: this.sizeAnim
                                            }
                                        ]
                                    }
                                ]}
                            />
                            <Text>Match your breathing to the size of the circle.</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10 }}>How long do you want to breathe for? </Text>
                            <Slider style={styles.slider}
                                minimumTrackTintColor={styles.slider.color}
                                maximumTrackTintColor={styles.slider.tintColor}
                                thumbTintColor={styles.slider.color}
                                onValueChange={sliderVal => this.setState({ sliderVal })}
                                minimumValue={1}
                                maximumValue={4}
                                step={1}
                                value={this.state.sliderVal}
                            />
                            <Text style={{ textAlign: 'center', color: 'black', fontSize: 20 }}>Rating: {this.state.sliderVal * 30} seconds</Text>
                        </View>

                        <TouchableOpacity title="Start" style={bigButton} onPress={this.fading}>
                            <Text style={buttonTextStyle}>
                                {this.state.buttonText}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </BackgroundImage>
            </SafeAreaProvider>
        )
    }
}


const fadingContainer = {
    width: 350,
    height: 350,
    borderRadius: 350 / 2,
    backgroundColor: "darkblue"
};
const back = {
    flex: 1,
    alignSelf: 'flex-start'
};
const bigButton = {
    width: "40%",
    height: "10%",
    backgroundColor: "#779FE7",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    marginHorizontal: "5%",
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center'
};
const buttonTextStyle = {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginVertical: 20
};

export default MeditationGame;