import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import bgPicture from '../assets/games.jpg';

const GameDisplay = () => {

    const [gamesList, setGamesList] = useState([
        { name: "Workout\nGame", id: 1 },
        { name: "Math\nGame", id: 2 },
        { name: "Scrabble\nGame", id: 3 },
        { name: "Memorization\nGame", id: 4 },
        { name: "Meditation\nGame", id: 5 },
        { name: "Journal\nGame", id: 6 },
    ]);

    const pressHandler = (id) => {
        console.log(id);
    }

    return (
        <SafeAreaProvider>
            <ImageBackground source={bgPicture} style={styles.img}>
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                barStyle="light-content"
                centerComponent={{
                    text: "Games List",
                    style: { fontSize: 22, color: "white" }
                }}
            />
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={gamesList}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.gameButton} onPress={() => pressHandler(item.id)}>
                            <Text style={styles.buttonText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    style={{height: "100%"}}
                />
            </View>
            </ImageBackground>
        </SafeAreaProvider>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: "100%",
        justifyContent: "center",
    },
    gameButton: {
        width: "40%",
        height: 125,
        backgroundColor: "#779FE7",
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1,
        marginHorizontal: "5%",
        marginTop: 80,
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        marginVertical: 20,
    },
    img: {
        flex: 1,
        height: "100%",
        width: "100%",
    }
})

export default GameDisplay