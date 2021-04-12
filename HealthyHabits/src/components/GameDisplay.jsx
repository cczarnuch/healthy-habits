import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Header, Icon, Overlay } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import bgPicture from "../assets/games.jpg";
import Setting from "../components/SettingScreen";
import MainStyle from "../styles/main"

const GameDisplay = props => {
  const [visible, setVisible] = useState(false);

  const [gamesList, setGamesList] = useState([
    { name: "Workout\nGame", id: 1 },
    { name: "Math\nGame", id: 2 },
    { name: "Word\nGame", id: 3 },
    { name: "Memorization\nGame", id: 4 },
    { name: "Meditation\nGame", id: 5 },
    { name: "Journal\nGame", id: 6 }
  ]);

  /*const pressHandler = (id) => {
        console.log(id);
    }*/

  const displaySettingsScreen = () => {
    console.log("toggle pressed");
    setVisible(!visible);
  };

  return (
    <SafeAreaProvider>
      <ImageBackground source={bgPicture} style={styles.img}>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          rightComponent={
            <Icon
              name="settings"
              color="white"
              onPress={displaySettingsScreen}
            ></Icon>
          }
          centerComponent={{
            text: "Games List",
            style: { fontSize: 22, color: "white" }
          }}
          containerStyle={{
            backgroundColor: "#85CBCC",
            justifyContent: "space-around"
          }}
        />
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            keyExtractor={item => item.id}
            data={gamesList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() => props.handleGame(item.id)}
              >
                <Text style={styles.buttonText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            style={{ height: "100%" }}
          />
        </View>
      </ImageBackground>

      {/* Settings Overlay toggled when settings Icon is clicked */}
      <Overlay isVisible={visible} fullScreen={true} overlayStyle={[props.dark ? MainStyle.darkContainer : MainStyle.container]}>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          rightComponent={
            <Icon
              name="close"
              color="white"
              style={styles.back}
              size={30}
              onPress={displaySettingsScreen}
            ></Icon>
          }
          centerComponent={{
            text: "Settings",
            style: { color: "#FFF", fontSize: 22 }
          }}
          containerStyle={{
            backgroundColor: '#85CBCC',
            justifyContent: "space-around"
          }}
        />
        <Setting 
          updateSetting={props.updateSetting}
          dark={props.dark} diffculty={props.diffculty}>
        </Setting>
      </Overlay>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    justifyContent: "center"
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
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginVertical: 20
  },
  img: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
});

export default GameDisplay;
