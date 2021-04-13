import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Icon } from "react-native-elements";

const ShownLetters = [
  [
    "",
    "I",
    "",
    "",
    "",
    "L",
    "M",
    "",
    "A",
    "",
    "",
    "Y",
    "H",
    "",
    "A",
    "",
    "",
    "H"
  ],
  [
    "J",
    "",
    "",
    "G",
    "O",
    "",
    "",
    "T",
    "",
    "U",
    "",
    "",
    "",
    "R",
    "",
    "A",
    "T",
    ""
  ],
  [
    "",
    "",
    "Y",
    "E",
    "",
    "S",
    "",
    "",
    "",
    "A",
    "R",
    "",
    "",
    "N",
    "E",
    "",
    "G",
    ""
  ],
  [
    "W",
    "",
    "",
    "",
    "O",
    "A",
    "",
    "A",
    "D",
    "",
    "",
    "",
    "B",
    "",
    "I",
    "",
    "H",
    ""
  ],
  [
    "",
    "U",
    "",
    "",
    "",
    "P",
    "E",
    "",
    "L",
    "I",
    "",
    "",
    "A",
    "",
    "C",
    "",
    "P",
    ""
  ]
];
const wordOneAnswer = ["FIT", "JOY", "TRY", "WIN", "FUN"];
const wordTwoAnswer = ["CALM", "GOOD", "EASY", "GOAL", "HOPE"];
const wordThreeAnswer = ["HAPPY", "TRUST", "HEART", "ADAPT", "BLISS"];
const wordFourAnswer = ["HEALTH", "BREATH", "ENERGY", "BRIGHT", "ACCEPT"];

const wordOneTryArray = [" I ", "J  ", "  Y", "W  ", " U "];
const wordTwoTryArray = ["  LM", "GO  ", "E S ", " OA ", "  PE"];
const wordThreeTryArray = [" A  Y", "T U  ", "  AR ", "AD   ", " LI  "];
const wordFourTryArray = ["H A  H", " R AT ", " NE G ", "B I H ", "A C P "];

const choiceAnswerArray = [
  ["H", "T", "C", "P", "A", "L", "F", "P", "E", "T"],
  ["O", "R", "T", "Y", "E", "O", "S", "H", "B", "D"],
  ["Y", "R", "Y", "E", "H", "A", "R", "T", "E", "T"],
  ["T", "L", "N", "R", "G", "I", "G", "T", "P", "A"],
  ["H", "B", "O", "C", "S", "N", "F", "T", "E", "S"]
];

const greenColor = "#A7D676";
const lightBlueColor = "#A8DEE0";
const darkBlueColor = "#85CBCC";

class WordGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordOneTry: wordOneTryArray[this.props.WordGameNum].toString(),
      wordTwoTry: wordTwoTryArray[this.props.WordGameNum].toString(),
      wordThreeTry: wordThreeTryArray[this.props.WordGameNum].toString(),
      wordFourTry: wordFourTryArray[this.props.WordGameNum].toString(),

      choiceAnswer: choiceAnswerArray[this.props.WordGameNum].slice(),

      W1L1changeBackgroundColor: lightBlueColor,
      W1L1changeBorderColor: darkBlueColor,
      W1L2changeBackgroundColor: lightBlueColor,
      W1L2changeBorderColor: darkBlueColor,
      W1L3changeBackgroundColor: lightBlueColor,
      W1L3changeBorderColor: darkBlueColor,
      W1FullColor: darkBlueColor,

      W2L1changeBackgroundColor: lightBlueColor,
      W2L1changeBorderColor: darkBlueColor,
      W2L2changeBackgroundColor: lightBlueColor,
      W2L2changeBorderColor: darkBlueColor,
      W2L3changeBackgroundColor: lightBlueColor,
      W2L3changeBorderColor: darkBlueColor,
      W2L4changeBackgroundColor: lightBlueColor,
      W2L4changeBorderColor: darkBlueColor,
      W2FullColor: darkBlueColor,

      W3L1changeBackgroundColor: lightBlueColor,
      W3L1changeBorderColor: darkBlueColor,
      W3L2changeBackgroundColor: lightBlueColor,
      W3L2changeBorderColor: darkBlueColor,
      W3L3changeBackgroundColor: lightBlueColor,
      W3L3changeBorderColor: darkBlueColor,
      W3L4changeBackgroundColor: lightBlueColor,
      W3L4changeBorderColor: darkBlueColor,
      W3L5changeBackgroundColor: lightBlueColor,
      W3L5changeBorderColor: darkBlueColor,
      W3FullColor: darkBlueColor,

      W4L1changeBackgroundColor: lightBlueColor,
      W4L1changeBorderColor: darkBlueColor,
      W4L2changeBackgroundColor: lightBlueColor,
      W4L2changeBorderColor: darkBlueColor,
      W4L3changeBackgroundColor: lightBlueColor,
      W4L3changeBorderColor: darkBlueColor,
      W4L4changeBackgroundColor: lightBlueColor,
      W4L4changeBorderColor: darkBlueColor,
      W4L5changeBackgroundColor: lightBlueColor,
      W4L5changeBorderColor: darkBlueColor,
      W4L6changeBackgroundColor: lightBlueColor,
      W4L6changeBorderColor: darkBlueColor,
      W4FullColor: darkBlueColor,

      D1changeBorderColor: greenColor,
      D2changeBorderColor: greenColor,
      D3changeBorderColor: greenColor,
      D4changeBorderColor: greenColor,
      D5changeBorderColor: greenColor,
      D6changeBorderColor: greenColor,
      D7changeBorderColor: greenColor,
      D8changeBorderColor: greenColor,
      D9changeBorderColor: greenColor,
      D10changeBorderColor: greenColor,

      score: 0,
      tempIndex: -1,

      W1L1: ShownLetters[this.props.WordGameNum][0],
      W1L2: ShownLetters[this.props.WordGameNum][1],
      W1L3: ShownLetters[this.props.WordGameNum][2],

      W2L1: ShownLetters[this.props.WordGameNum][3],
      W2L2: ShownLetters[this.props.WordGameNum][4],
      W2L3: ShownLetters[this.props.WordGameNum][5],
      W2L4: ShownLetters[this.props.WordGameNum][6],

      W3L1: ShownLetters[this.props.WordGameNum][7],
      W3L2: ShownLetters[this.props.WordGameNum][8],
      W3L3: ShownLetters[this.props.WordGameNum][9],
      W3L4: ShownLetters[this.props.WordGameNum][10],
      W3L5: ShownLetters[this.props.WordGameNum][11],

      W4L1: ShownLetters[this.props.WordGameNum][12],
      W4L2: ShownLetters[this.props.WordGameNum][13],
      W4L3: ShownLetters[this.props.WordGameNum][14],
      W4L4: ShownLetters[this.props.WordGameNum][15],
      W4L5: ShownLetters[this.props.WordGameNum][16],
      W4L6: ShownLetters[this.props.WordGameNum][17]
    };
  }

  findSpace() {
    console.log(this.state.wordOneTry);
    for (let i = 0; i < this.state.choiceAnswer.length; i++) {
      if (this.state.choiceAnswer[i] == "") {
        return i;
      }
    }
  }

  createWinAlert() {
    this.props.setWordGameNum(this.props.WordGameNum + 1);
    console.log(this.props.WordGameNum);
    this.props.updatePoints(10, this.props.wordActive);
    this.props.updatePlayerData("word", 10, this.props.wordActive);
    Alert.alert("Great job!", "You are wordy of the crown :)", [
      {
        text: "Play Again",
        onPress: () => console.log("Cancel Pressed")
      },
      { text: "Game Menu", onPress: () => this.returnGameMenu() }
    ]);
  }

  lightUpDragBlock() {
    this.setState({ D1changeBorderColor: greenColor });
    this.setState({ D2changeBorderColor: greenColor });
    this.setState({ D3changeBorderColor: greenColor });
    this.setState({ D4changeBorderColor: greenColor });
    this.setState({ D5changeBorderColor: greenColor });
    this.setState({ D6changeBorderColor: greenColor });
    this.setState({ D7changeBorderColor: greenColor });
    this.setState({ D8changeBorderColor: greenColor });
    this.setState({ D9changeBorderColor: greenColor });
    this.setState({ D10changeBorderColor: greenColor });
  }

  lightUpBorderDragPress() {
    this.setState({ W1L1changeBorderColor: greenColor });
    this.setState({ W1L2changeBorderColor: greenColor });
    this.setState({ W1L3changeBorderColor: greenColor });
    this.setState({ W2L1changeBorderColor: greenColor });
    this.setState({ W2L2changeBorderColor: greenColor });
    this.setState({ W2L3changeBorderColor: greenColor });
    this.setState({ W2L4changeBorderColor: greenColor });
    this.setState({ W3L1changeBorderColor: greenColor });
    this.setState({ W3L2changeBorderColor: greenColor });
    this.setState({ W3L3changeBorderColor: greenColor });
    this.setState({ W3L4changeBorderColor: greenColor });
    this.setState({ W3L5changeBorderColor: greenColor });
    this.setState({ W4L1changeBorderColor: greenColor });
    this.setState({ W4L2changeBorderColor: greenColor });
    this.setState({ W4L3changeBorderColor: greenColor });
    this.setState({ W4L4changeBorderColor: greenColor });
    this.setState({ W4L5changeBorderColor: greenColor });
    this.setState({ W4L6changeBorderColor: greenColor });
  }

  lightUpBorderNotChosen(inputValue) {
    if (inputValue != "W1L1" && this.state.W1L1 == "") {
      this.setState({ W1L1changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W1L2" && this.state.W1L2 == "") {
      this.setState({ W1L2changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W1L3" && this.state.W1L3 == "") {
      this.setState({ W1L3changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W2L1" && this.state.W2L1 == "") {
      this.setState({ W2L1changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W2L2" && this.state.W2L2 == "") {
      this.setState({ W2L2changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W2L3" && this.state.W2L3 == "") {
      this.setState({ W2L3changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W2L4" && this.state.W2L4 == "") {
      this.setState({ W2L4changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W3L1" && this.state.W3L1 == "") {
      this.setState({ W3L1changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W3L2" && this.state.W3L2 == "") {
      this.setState({ W3L2changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W3L3" && this.state.W3L3 == "") {
      this.setState({ W3L3changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W3L4" && this.state.W3L4 == "") {
      this.setState({ W3L4changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W3L5" && this.state.W3L5 == "") {
      this.setState({ W3L5changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W4L1" && this.state.W4L1 == "") {
      this.setState({ W4L1changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W4L2" && this.state.W4L2 == "") {
      this.setState({ W4L2changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W4L3" && this.state.W4L3 == "") {
      this.setState({ W4L3changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W4L4" && this.state.W4L4 == "") {
      this.setState({ W4L4changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W4L5" && this.state.W4L5 == "") {
      this.setState({ W4L5changeBorderColor: darkBlueColor });
    }
    if (inputValue != "W4L6" && this.state.W4L6 == "") {
      this.setState({ W4L6changeBorderColor: darkBlueColor });
    }
  }

  //return to game menu
  returnGameMenu() {
    console.log(choiceAnswerArray[this.props.WordGameNum]);
    (this.state.wordOneTry = wordOneTryArray[
      this.props.WordGameNum
    ].toString()),
      (this.state.wordTwoTry = wordTwoTryArray[
        this.props.WordGameNum
      ].toString()),
      (this.state.wordThreeTry = wordThreeTryArray[
        this.props.WordGameNum
      ].toString()),
      (this.state.wordFourTry = wordFourTryArray[
        this.props.WordGameNum
      ].toString()),
      (this.state.choiceAnswer = choiceAnswerArray[this.props.WordGameNum]),
      this.props.setIndex(2);
    this.props.setMain(true);
  }

  render() {
    return (
      <SafeAreaProvider>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          leftComponent={
            <Icon
              name="chevron-left"
              color="white"
              size={30}
              onPress={() => this.returnGameMenu()}
            ></Icon>
          }
          centerComponent={{
            text: "Word Game",
            style: { color: "#FFF", fontSize: 26 }
          }}
          containerStyle={{
            backgroundColor: greenColor,
            justifyContent: "space-around"
          }}
        />
        <View style={styleShape.container}>
          <View style={styleShape.scoreContainer}>
            <Text
              style={{
                fontSize: 70,
                color: this.state.score == 10 ? greenColor : "#FFDD94"
              }}
            >
              {this.state.score.toString() + "/10"}
            </Text>
          </View>
        </View>
        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][0] == ""
                ? this.W1L1Style()
                : this.WordOneFull()
            }
            onPress={() => {
              if (
                this.state.wordOneTry.substring(0, 1) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W1L1changeBackgroundColor: greenColor
                });
                this.setState({
                  W1L1: this.state.choiceAnswer[this.state.tempIndex]
                });

                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W1L1");

                this.setState({
                  wordOneTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordOneTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordOneTry.substring(1, 20) ==
                  wordOneAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 1 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 1
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (
                this.state.wordOneTry != wordOneAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W1L1");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W1L1; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W1L1changeBorderColor: darkBlueColor });
                this.setState({ W1L1changeBackgroundColor: lightBlueColor });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordOneTry: " " + this.state.wordOneTry.substring(1, 20)
                });
                this.setState({
                  W1L1: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][0] != "" ||
              this.state.wordOneTry == wordOneAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W1L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][1] == ""
                ? this.W1L2Style()
                : this.WordOneFull()
            }
            onPress={() => {
              if (
                this.state.wordOneTry.substring(1, 2) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W1L2changeBackgroundColor: greenColor
                });
                this.setState({
                  W1L2: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W1L2");

                this.setState({
                  wordOneTry:
                    this.state.wordOneTry.substring(0, 1) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordOneTry.substring(2, 20)
                });

                if (
                  this.state.wordOneTry.substring(0, 1) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordOneTry.substring(2, 20) ==
                  wordOneAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 1 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 1
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (
                this.state.wordOneTry != wordOneAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W1L2");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W1L2; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W1L2changeBorderColor: darkBlueColor });
                this.setState({ W1L2changeBackgroundColor: lightBlueColor });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordOneTry:
                    this.state.wordOneTry.substring(0, 1) +
                    " " +
                    this.state.wordOneTry.substring(2, 20)
                });
                this.setState({
                  W1L2: ""
                });
                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][1] != "" ||
              this.state.wordOneTry == wordOneAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W1L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][2] == ""
                ? this.W1L3Style()
                : this.WordOneFull()
            }
            onPress={() => {
              if (
                this.state.wordOneTry.substring(2, 3) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W1L3changeBackgroundColor: greenColor
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W1L3");

                this.setState({
                  W1L3: this.state.choiceAnswer[this.state.tempIndex]
                });

                this.setState({
                  wordOneTry:
                    this.state.wordOneTry.substring(0, 2) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordOneTry.substring(3, 20)
                });

                if (
                  this.state.wordOneTry.substring(0, 2) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordOneTry.substring(3, 20) ==
                  wordOneAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 1 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 1
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (
                this.state.wordOneTry != wordOneAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W1L3");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W1L3; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W1L3changeBorderColor: darkBlueColor });
                this.setState({ W1L3changeBackgroundColor: lightBlueColor });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordOneTry:
                    this.state.wordOneTry.substring(0, 2) +
                    " " +
                    this.state.wordOneTry.substring(3, 20)
                });
                this.setState({
                  W1L3: ""
                });
                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][2] != "" ||
              this.state.wordOneTry == wordOneAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W1L3}</Text>
          </TouchableOpacity>
        </View>

        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][3] == ""
                ? this.W2L1Style()
                : this.WordTwoFull()
            }
            onPress={() => {
              if (
                this.state.wordTwoTry.substring(0, 1) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W2L1changeBackgroundColor: greenColor
                });
                this.setState({
                  W2L1: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L1");

                this.setState({
                  wordTwoTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordTwoTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordTwoTry.substring(1, 20) ==
                  wordTwoAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 2 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordTwoTry != wordTwoAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L1");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W2L1; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W2L1changeBorderColor: darkBlueColor });
                this.setState({
                  W2L1changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordTwoTry: " " + this.state.wordTwoTry.substring(1, 20)
                });
                this.setState({
                  W2L1: ""
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordTwoTry.substring(1, 20) ==
                  wordTwoAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 2 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 2
                  });
                }

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][3] != "" ||
              this.state.wordTwoTry == wordTwoAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][4] == ""
                ? this.W2L2Style()
                : this.WordTwoFull()
            }
            onPress={() => {
              if (
                this.state.wordTwoTry.substring(1, 2) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W2L2changeBackgroundColor: greenColor
                });
                this.setState({
                  W2L2: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L2");

                this.setState({
                  wordTwoTry:
                    this.state.wordTwoTry.substring(0, 1) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordTwoTry.substring(2, 20)
                });

                if (
                  this.state.wordTwoTry.substring(0, 1) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordTwoTry.substring(2, 20) ==
                  wordTwoAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 2 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordTwoTry != wordTwoAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L2");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W2L2; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W2L2changeBorderColor: darkBlueColor });
                this.setState({
                  W2L2changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordTwoTry:
                    this.state.wordTwoTry.substring(0, 1) +
                    " " +
                    this.state.wordTwoTry.substring(2, 20)
                });
                this.setState({
                  W2L2: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][4] != "" ||
              this.state.wordTwoTry == wordTwoAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][5] == ""
                ? this.W2L3Style()
                : this.WordTwoFull()
            }
            onPress={() => {
              if (
                this.state.wordTwoTry.substring(2, 3) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W2L3changeBackgroundColor: greenColor
                });
                this.setState({
                  W2L3: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L3");

                this.setState({
                  wordTwoTry:
                    this.state.wordTwoTry.substring(0, 2) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordTwoTry.substring(3, 20)
                });

                if (
                  this.state.wordTwoTry.substring(0, 2) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordTwoTry.substring(3, 20) ==
                  wordTwoAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 2 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordTwoTry != wordTwoAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L3");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W2L3; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W2L3changeBorderColor: darkBlueColor });
                this.setState({
                  W2L3changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordTwoTry:
                    this.state.wordTwoTry.substring(0, 2) +
                    " " +
                    this.state.wordTwoTry.substring(3, 20)
                });
                this.setState({
                  W2L3: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][5] != "" ||
              this.state.wordTwoTry == wordTwoAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][6] == ""
                ? this.W2L4Style()
                : this.WordTwoFull()
            }
            onPress={() => {
              if (
                this.state.wordTwoTry.substring(3, 4) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W2L4changeBackgroundColor: greenColor
                });
                this.setState({
                  W2L4: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L4");

                this.setState({
                  wordTwoTry:
                    this.state.wordTwoTry.substring(0, 3) +
                    this.state.choiceAnswer[this.state.tempIndex]
                });

                if (
                  this.state.wordTwoTry.substring(0, 3) +
                  this.state.choiceAnswer[this.state.tempIndex] ==
                  wordTwoAnswer[this.props.WordGameNum]
                ) {
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordTwoTry != wordTwoAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W2L4");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W2L4; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W2L4changeBorderColor: darkBlueColor });
                this.setState({
                  W2L4changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordTwoTry: this.state.wordTwoTry.substring(0, 3) + " "
                });
                this.setState({
                  W2L4: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][6] != "" ||
              this.state.wordTwoTry == wordTwoAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L4}</Text>
          </TouchableOpacity>
        </View>
        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][7] == ""
                ? this.W3L1Style()
                : this.WordThreeFull()
            }
            onPress={() => {
              if (
                this.state.wordThreeTry.substring(0, 1) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W3L1changeBackgroundColor: greenColor
                });
                this.setState({
                  W3L1: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L1");

                this.setState({
                  wordThreeTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordThreeTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordThreeTry.substring(1, 20) ==
                  wordThreeAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 3 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordThreeTry !=
                wordThreeAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L1");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W3L1; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W3L1changeBorderColor: darkBlueColor });
                this.setState({
                  W3L1changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordThreeTry: " " + this.state.wordThreeTry.substring(1, 20)
                });
                this.setState({
                  W3L1: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][7] != "" ||
              this.state.wordThreeTry == wordThreeAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][8] == ""
                ? this.W3L2Style()
                : this.WordThreeFull()
            }
            onPress={() => {
              if (
                this.state.wordThreeTry.substring(1, 2) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W3L2changeBackgroundColor: greenColor
                });
                this.setState({
                  W3L2: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L2");

                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 1) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordThreeTry.substring(2, 20)
                });

                if (
                  this.state.wordThreeTry.substring(0, 1) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordThreeTry.substring(2, 20) ==
                  wordThreeAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 3 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordThreeTry !=
                wordThreeAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L2");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W3L2; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W3L2changeBorderColor: darkBlueColor });
                this.setState({
                  W3L2changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 1) +
                    " " +
                    this.state.wordThreeTry.substring(2, 20)
                });
                this.setState({
                  W3L2: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][8] != "" ||
              this.state.wordThreeTry == wordThreeAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][9] == ""
                ? this.W3L3Style()
                : this.WordThreeFull()
            }
            onPress={() => {
              if (
                this.state.wordThreeTry.substring(2, 3) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W3L3changeBackgroundColor: greenColor
                });
                this.setState({
                  W3L3: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L3");

                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 2) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordThreeTry.substring(3, 20)
                });

                if (
                  this.state.wordThreeTry.substring(0, 2) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordThreeTry.substring(3, 20) ==
                  wordThreeAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 3 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordThreeTry !=
                wordThreeAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L3");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W3L3; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W3L3changeBorderColor: darkBlueColor });
                this.setState({
                  W3L3changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 2) +
                    " " +
                    this.state.wordThreeTry.substring(3, 20)
                });
                this.setState({
                  W3L3: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][9] != "" ||
              this.state.wordThreeTry == wordThreeAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][10] == ""
                ? this.W3L4Style()
                : this.WordThreeFull()
            }
            onPress={() => {
              if (
                this.state.wordThreeTry.substring(3, 4) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W3L4changeBackgroundColor: greenColor
                });
                this.setState({
                  W3L4: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L4");

                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 3) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordThreeTry.substring(4, 5)
                });

                if (
                  this.state.wordThreeTry.substring(0, 3) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordThreeTry.substring(4, 5) ==
                  wordThreeAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 3 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 3
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (
                this.state.wordThreeTry !=
                wordThreeAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L4");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W3L4; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W3L4changeBorderColor: darkBlueColor });
                this.setState({
                  W3L4changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 3) +
                    " " +
                    this.state.wordThreeTry.substring(4, 5)
                });
                this.setState({
                  W3L4: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][10] != "" ||
              this.state.wordThreeTry == wordThreeAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L4}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][11] == ""
                ? this.W3L5Style()
                : this.WordThreeFull()
            }
            onPress={() => {
              if (
                this.state.wordThreeTry.substring(4, 5) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W3L5changeBackgroundColor: greenColor
                });
                this.setState({
                  W3L5: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L5");

                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 4) +
                    this.state.choiceAnswer[this.state.tempIndex]
                });

                if (
                  this.state.wordThreeTry.substring(0, 4) +
                  this.state.choiceAnswer[this.state.tempIndex] ==
                  wordThreeAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 3 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordThreeTry !=
                wordThreeAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W3L5");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W3L5; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W3L5changeBorderColor: darkBlueColor });
                this.setState({
                  W3L5changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordThreeTry: this.state.wordThreeTry.substring(0, 4) + " "
                });
                this.setState({
                  W3L5: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][11] != "" ||
              this.state.wordThreeTry == wordThreeAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L5}</Text>
          </TouchableOpacity>
        </View>
        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][12] == ""
                ? this.W4L1Style()
                : this.WordFourFull()
            }
            onPress={() => {
              if (
                this.state.wordFourTry.substring(0, 1) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W4L1changeBackgroundColor: greenColor
                });
                this.setState({
                  W4L1: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L1");

                this.setState({
                  wordFourTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordFourTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordFourTry.substring(1, 20) ==
                  wordFourAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 4 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordFourTry != wordFourAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L1");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W4L1; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W4L1changeBorderColor: darkBlueColor });
                this.setState({
                  W4L1changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordFourTry: " " + this.state.wordFourTry.substring(1, 20)
                });
                this.setState({
                  W4L1: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][12] != "" ||
              this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][13] == ""
                ? this.W4L2Style()
                : this.WordFourFull()
            }
            onPress={() => {
              if (
                this.state.wordFourTry.substring(1, 2) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W4L2changeBackgroundColor: greenColor
                });
                this.setState({
                  W4L2: this.state.choiceAnswer[this.state.tempIndex]
                });
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L2");

                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 1) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordFourTry.substring(2, 20)
                });

                if (
                  this.state.wordFourTry.substring(0, 1) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordFourTry.substring(2, 20) ==
                  wordFourAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 4 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordFourTry != wordFourAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L2");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W4L2; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W4L2changeBorderColor: darkBlueColor });
                this.setState({
                  W4L2changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 1) +
                    " " +
                    this.state.wordFourTry.substring(2, 20)
                });
                this.setState({
                  W4L2: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][13] != "" ||
              this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][14] == ""
                ? this.W4L3Style()
                : this.WordFourFull()
            }
            onPress={() => {
              if (
                this.state.wordFourTry.substring(2, 3) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W4L3changeBackgroundColor: greenColor
                });
                this.setState({
                  W4L3: this.state.choiceAnswer[this.state.tempIndex]
                });

                this.lightUpBorderNotChosen("W4L3");

                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 2) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordFourTry.substring(3, 20)
                });

                if (
                  this.state.wordFourTry.substring(0, 2) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordFourTry.substring(3, 20) ==
                  wordFourAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 4 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordFourTry != wordFourAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L3");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W4L3; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W4L3changeBorderColor: darkBlueColor });
                this.setState({
                  W4L3changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 2) +
                    " " +
                    this.state.wordFourTry.substring(3, 20)
                });
                this.setState({
                  W4L3: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][14] != "" ||
              this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][15] == ""
                ? this.W4L4Style()
                : this.WordFourFull()
            }
            onPress={() => {
              if (
                this.state.wordFourTry.substring(3, 4) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W4L4changeBackgroundColor: greenColor
                });
                this.setState({
                  W4L4: this.state.choiceAnswer[this.state.tempIndex]
                });

                this.lightUpBorderNotChosen("W4L4");

                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 3) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordFourTry.substring(4, 6)
                });

                if (
                  this.state.wordFourTry.substring(0, 3) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordFourTry.substring(4, 6) ==
                  wordFourAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 4 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordFourTry != wordFourAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L4");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W4L4; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W4L4changeBorderColor: darkBlueColor });
                this.setState({
                  W4L4changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 3) +
                    " " +
                    this.state.wordFourTry.substring(4, 6)
                });
                this.setState({
                  W4L4: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][15] != "" ||
              this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L4}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][16] == ""
                ? this.W4L5Style()
                : this.WordFourFull()
            }
            onPress={() => {
              if (
                this.state.wordFourTry.substring(4, 5) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W4L5changeBackgroundColor: greenColor
                });
                this.setState({
                  W4L5: this.state.choiceAnswer[this.state.tempIndex]
                });

                this.lightUpBorderNotChosen("W4L5");

                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 4) +
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordFourTry.substring(5, 6)
                });

                if (
                  this.state.wordFourTry.substring(0, 4) +
                  this.state.choiceAnswer[this.state.tempIndex] +
                  this.state.wordFourTry.substring(5, 6) ==
                  wordFourAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 4 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordFourTry != wordFourAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L5");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W4L5; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W4L5changeBorderColor: darkBlueColor });
                this.setState({
                  W4L5changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 4) +
                    " " +
                    this.state.wordFourTry.substring(5, 6)
                });
                this.setState({
                  W4L5: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][16] != "" ||
              this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L5}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[this.props.WordGameNum][17] == ""
                ? this.W4L6Style()
                : this.WordFourFull()
            }
            onPress={() => {
              if (
                this.state.wordFourTry.substring(5, 6) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W4L6changeBackgroundColor: greenColor
                });
                this.setState({
                  W4L6: this.state.choiceAnswer[this.state.tempIndex]
                });

                this.lightUpBorderNotChosen("W4L6");

                this.setState({
                  wordFourTry:
                    this.state.wordFourTry.substring(0, 5) +
                    this.state.choiceAnswer[this.state.tempIndex]
                });

                if (
                  this.state.wordFourTry.substring(0, 5) +
                  this.state.choiceAnswer[this.state.tempIndex] ==
                  wordFourAnswer[this.props.WordGameNum]
                ) {
                  if (this.state.score + 4 == 10) {
                    this.createWinAlert();
                  }
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (
                this.state.wordFourTry != wordFourAnswer[this.props.WordGameNum]
              ) {
                this.lightUpDragBlock();
                this.lightUpBorderNotChosen("W4L6");
                const newIds = this.state.choiceAnswer.slice(); //copy the array
                newIds[this.findSpace()] = this.state.W4L6; //execute the manipulations
                this.setState({ choiceAnswer: newIds }); //set the new state

                this.setState({ W4L6changeBorderColor: darkBlueColor });
                this.setState({
                  W4L6changeBackgroundColor: lightBlueColor
                });

                this.state.choiceAnswer[this.state.tempIndex];
                this.setState({
                  wordFourTry: this.state.wordFourTry.substring(0, 5) + " "
                });
                this.setState({
                  W4L6: ""
                });

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[this.props.WordGameNum][17] != "" ||
              this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L6}</Text>
          </TouchableOpacity>
        </View>
        <View style={styleShape.blankSpace}></View>
        <View style={this.dragContainer()}>
          {this.state.choiceAnswer[0] != "" ? (
            <TouchableOpacity
              style={this.DragOne()}
              onPress={() => {
                this.lightUpDragBlock();
                this.lightUpDragBlock();
                this.setState({ D1changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 0 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[0]}
              </Text>
            </TouchableOpacity>
          ) : null}

          {this.state.choiceAnswer[1] != "" ? (
            <TouchableOpacity
              style={this.DragTwo()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D2changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 1 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[1]}
              </Text>
            </TouchableOpacity>
          ) : null}

          {this.state.choiceAnswer[2] != "" ? (
            <TouchableOpacity
              style={this.DragThree()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D3changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 2 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[2]}
              </Text>
            </TouchableOpacity>
          ) : null}

          {this.state.choiceAnswer[3] != "" ? (
            <TouchableOpacity
              style={this.DragFour()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D4changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 3 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[3]}
              </Text>
            </TouchableOpacity>
          ) : null}
          {this.state.choiceAnswer[4] != "" ? (
            <TouchableOpacity
              style={this.DragFive()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D5changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 4 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[4]}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={this.dragContainer()}>
          {this.state.choiceAnswer[5] != "" ? (
            <TouchableOpacity
              style={this.DragSix()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D6changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 5 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[5]}
              </Text>
            </TouchableOpacity>
          ) : null}
          {this.state.choiceAnswer[6] != "" ? (
            <TouchableOpacity
              style={this.DragSeven()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D7changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 6 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[6]}
              </Text>
            </TouchableOpacity>
          ) : null}
          {this.state.choiceAnswer[7] != "" ? (
            <TouchableOpacity
              style={this.DragEight()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D8changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 7 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[7]}
              </Text>
            </TouchableOpacity>
          ) : null}
          {this.state.choiceAnswer[8] != "" ? (
            <TouchableOpacity
              style={this.DragNine()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D9changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 8 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[8]}
              </Text>
            </TouchableOpacity>
          ) : null}
          {this.state.choiceAnswer[9] != "" ? (
            <TouchableOpacity
              style={this.DragTen()}
              onPress={() => {
                this.lightUpDragBlock();
                this.setState({ D10changeBorderColor: "#FFFFFF" });
                this.setState({ tempIndex: 9 });
                this.lightUpBorderDragPress();
              }}
            >
              <Text style={styleShape.appButtonText}>
                {this.state.choiceAnswer[9]}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </SafeAreaProvider>
    );
  }

  WordOneFull = function () {
    return {
      marginTop: 30,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor:
        this.state.wordOneTry == wordOneAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W1FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordOneTry == wordOneAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W1FullColor
    };
  };

  W1L1Style = function () {
    return {
      marginTop: 30,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W1L1changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W1L1changeBorderColor
    };
  };

  W1L2Style = function () {
    return {
      marginTop: 30,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W1L2changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W1L2changeBorderColor
    };
  };

  W1L3Style = function () {
    return {
      marginTop: 30,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W1L3changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W1L3changeBorderColor
    };
  };

  WordTwoFull = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor:
        this.state.wordTwoTry == wordTwoAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W2FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordTwoTry == wordTwoAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W2FullColor
    };
  };

  W2L1Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W2L1changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W2L1changeBorderColor
    };
  };

  W2L2Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W2L2changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W2L2changeBorderColor
    };
  };

  W2L3Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W2L3changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W2L3changeBorderColor
    };
  };

  W2L4Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W2L4changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W2L4changeBorderColor
    };
  };

  WordThreeFull = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor:
        this.state.wordThreeTry == wordThreeAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W3FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordThreeTry == wordThreeAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W3FullColor
    };
  };

  W3L1Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W3L1changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W3L1changeBorderColor
    };
  };

  W3L2Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W3L2changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W3L2changeBorderColor
    };
  };

  W3L3Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W3L3changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W3L3changeBorderColor
    };
  };

  W3L4Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W3L4changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W3L4changeBorderColor
    };
  };

  W3L5Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W3L5changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W3L5changeBorderColor
    };
  };

  WordFourFull = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor:
        this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W4FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordFourTry == wordFourAnswer[this.props.WordGameNum]
          ? greenColor
          : this.state.W4FullColor
    };
  };

  W4L1Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W4L1changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W4L1changeBorderColor
    };
  };

  W4L2Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W4L2changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W4L2changeBorderColor
    };
  };

  W4L3Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W4L3changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W4L3changeBorderColor
    };
  };

  W4L4Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W4L4changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W4L4changeBorderColor
    };
  };

  W4L5Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W4L5changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W4L5changeBorderColor
    };
  };

  W4L6Style = function () {
    return {
      marginTop: 50,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: this.state.W4L6changeBackgroundColor,
      borderWidth: 5,
      borderColor: this.state.W4L6changeBorderColor
    };
  };

  dragContainer = function () {
    return {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: undefined,
      height: undefined,
      flex: 1,
      backgroundColor: this.state.score == 10 ? greenColor : "#FFDD94"
    };
  };

  DragOne = function () {
    return {
      marginTop: 20,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D1changeBorderColor
    };
  };

  DragTwo = function () {
    return {
      marginTop: 20,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D2changeBorderColor
    };
  };

  DragThree = function () {
    return {
      marginTop: 20,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D3changeBorderColor
    };
  };

  DragFour = function () {
    return {
      marginTop: 20,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D4changeBorderColor
    };
  };

  DragFive = function () {
    return {
      marginTop: 20,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D5changeBorderColor
    };
  };

  DragSix = function () {
    return {
      marginTop: -40,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D6changeBorderColor
    };
  };

  DragSeven = function () {
    return {
      marginTop: -40,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D7changeBorderColor
    };
  };

  DragEight = function () {
    return {
      marginTop: -40,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D8changeBorderColor
    };
  };

  DragNine = function () {
    return {
      marginTop: -40,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D9changeBorderColor
    };
  };

  DragTen = function () {
    return {
      marginTop: -40,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderWidth: 5,
      borderColor: this.state.D10changeBorderColor
    };
  };
}

const styleShape = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  blankSpace: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  scoreContainer: {
    marginTop: 10,
    justifyContent: "center"
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default WordGame;
