import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

const ShownLetters = [
  "E",
  "",
  "",
  "S",
  "O",
  "",
  "",
  "F",
  "",
  "I",
  "",
  "",
  "",
  "U",
  "",
  "G",
  "E",
  ""
];

const wordOneAnswer = "EAT";
const wordTwoAnswer = "SODA";
const wordThreeAnswer = "FRIES";
const wordFourAnswer = "BURGER";

const greenColor = "#A7D676";
const lightBlueColor = "#A8DEE0";
const darkBlueColor = "#85CBCC";

class WordGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

      score: 0,

      tempIndex: -1,

      wordOneTry: "E  ",
      wordTwoTry: "SO  ",
      wordThreeTry: "F I  ",
      wordFourTry: " U GE ",

      choiceAnswer: ["R", "B", "A", "D", "E", "R", "T", "A", "R", "S"],

      W1L1: ShownLetters[0],
      W1L2: ShownLetters[1],
      W1L3: ShownLetters[2],

      W2L1: ShownLetters[3],
      W2L2: ShownLetters[4],
      W2L3: ShownLetters[5],
      W2L4: ShownLetters[6],

      W3L1: ShownLetters[7],
      W3L2: ShownLetters[8],
      W3L3: ShownLetters[9],
      W3L4: ShownLetters[10],
      W3L5: ShownLetters[11],

      W4L1: ShownLetters[12],
      W4L2: ShownLetters[13],
      W4L3: ShownLetters[14],
      W4L4: ShownLetters[15],
      W4L5: ShownLetters[16],
      W4L6: ShownLetters[17],

      D1L1: "R"
    };
  }

  findSpace() {
    for (let i = 0; i < this.state.choiceAnswer.length; i++) {
      if (this.state.choiceAnswer[i] == "") {
        return i;
      }
    }
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
    if (inputValue != "W1L1" && this.state.WLL1 == "") {
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

  render() {
    return (
      <SafeAreaProvider>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          rightComponent={{ icon: "settings", color: "#fff" }}
          centerComponent={{
            text: "Word Fill",
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
                color:
                  this.state.score == 10
                    ? greenColor
                    : this.state.score == 0
                    ? "#FA897B"
                    : "#FFDD94"
              }}
            >
              {this.state.score.toString() + "/10"}
            </Text>
          </View>
        </View>
        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[0] == "" ? this.W1L1Style() : this.WordOneFull()
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

                this.lightUpBorderNotChosen("W1L1");

                this.setState({
                  wordOneTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordOneTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordOneTry.substring(1, 20) ==
                  wordOneAnswer
                ) {
                  this.setState({
                    score: this.state.score + 1
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (this.state.wordOneTry != wordOneAnswer) {
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
              ShownLetters[0] != "" || this.state.wordOneTry == wordOneAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W1L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[1] == "" ? this.W1L2Style() : this.WordOneFull()
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
                  wordOneAnswer
                ) {
                  this.setState({
                    score: this.state.score + 1
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (this.state.wordOneTry != wordOneAnswer) {
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
              ShownLetters[1] != "" || this.state.wordOneTry == wordOneAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W1L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[2] == "" ? this.W1L3Style() : this.WordOneFull()
            }
            onPress={() => {
              if (
                this.state.wordOneTry.substring(2, 3) == " " &&
                this.state.tempIndex != -1
              ) {
                this.setState({
                  W1L3changeBackgroundColor: greenColor
                });

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
                  wordOneAnswer
                ) {
                  this.setState({
                    score: this.state.score + 1
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (this.state.wordOneTry != wordOneAnswer) {
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
              ShownLetters[2] != "" || this.state.wordOneTry == wordOneAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W1L3}</Text>
          </TouchableOpacity>
        </View>

        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[3] == "" ? this.W2L1Style() : this.WordTwoFull()
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

                this.lightUpBorderNotChosen("W2L1");

                this.setState({
                  wordTwoTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordTwoTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordTwoTry.substring(1, 20) ==
                  wordTwoAnswer
                ) {
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordTwoTry != wordTwoAnswer) {
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
                  wordTwoAnswer
                ) {
                  this.setState({
                    score: this.state.score + 2
                  });
                }

                this.state.tempIndex = -1;
              }
            }}
            disabled={
              ShownLetters[3] != "" || this.state.wordTwoTry == wordTwoAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[4] == "" ? this.W2L2Style() : this.WordTwoFull()
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
                  wordTwoAnswer
                ) {
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordTwoTry != wordTwoAnswer) {
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
              ShownLetters[4] != "" || this.state.wordTwoTry == wordTwoAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[5] == "" ? this.W2L3Style() : this.WordTwoFull()
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
                  wordTwoAnswer
                ) {
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordTwoTry != wordTwoAnswer) {
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
              ShownLetters[5] != "" || this.state.wordTwoTry == wordTwoAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[6] == "" ? this.W2L4Style() : this.WordTwoFull()
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

                this.lightUpBorderNotChosen("W2L4");

                this.setState({
                  wordTwoTry:
                    this.state.wordTwoTry.substring(0, 3) +
                    this.state.choiceAnswer[this.state.tempIndex]
                });

                if (
                  this.state.wordTwoTry.substring(0, 3) +
                    this.state.choiceAnswer[this.state.tempIndex] ==
                  wordTwoAnswer
                ) {
                  this.setState({
                    score: this.state.score + 2
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordTwoTry != wordTwoAnswer) {
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
              ShownLetters[6] != "" || this.state.wordTwoTry == wordTwoAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W2L4}</Text>
          </TouchableOpacity>
        </View>
        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[7] == "" ? this.W3L1Style() : this.WordThreeFull()
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

                this.lightUpBorderNotChosen("W3L1");

                this.setState({
                  wordThreeTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordThreeTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordThreeTry.substring(1, 20) ==
                  wordThreeAnswer
                ) {
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordThreeTry != wordThreeAnswer) {
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
              ShownLetters[7] != "" ||
              this.state.wordThreeTry == wordThreeAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[8] == "" ? this.W3L2Style() : this.WordThreeFull()
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
                  wordThreeAnswer
                ) {
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordThreeTry != wordThreeAnswer) {
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
              ShownLetters[8] != "" ||
              this.state.wordThreeTry == wordThreeAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[9] == "" ? this.W3L3Style() : this.WordThreeFull()
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
                  wordThreeAnswer
                ) {
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordThreeTry != wordThreeAnswer) {
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
              ShownLetters[9] != "" ||
              this.state.wordThreeTry == wordThreeAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[10] == "" ? this.W3L4Style() : this.WordThreeFull()
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
                  wordThreeAnswer
                ) {
                  this.setState({
                    score: this.state.score + 3
                  });
                }

                this.state.choiceAnswer[this.state.tempIndex] = "";

                this.state.tempIndex = -1;
              } else if (this.state.wordThreeTry != wordThreeAnswer) {
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
              ShownLetters[10] != "" ||
              this.state.wordThreeTry == wordThreeAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L4}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[11] == "" ? this.W3L5Style() : this.WordThreeFull()
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

                this.lightUpBorderNotChosen("W3L5");

                this.setState({
                  wordThreeTry:
                    this.state.wordThreeTry.substring(0, 4) +
                    this.state.choiceAnswer[this.state.tempIndex]
                });

                if (
                  this.state.wordThreeTry.substring(0, 4) +
                    this.state.choiceAnswer[this.state.tempIndex] ==
                  wordThreeAnswer
                ) {
                  this.setState({
                    score: this.state.score + 3
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordThreeTry != wordThreeAnswer) {
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
              ShownLetters[11] != "" ||
              this.state.wordThreeTry == wordThreeAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W3L5}</Text>
          </TouchableOpacity>
        </View>
        <View style={styleShape.container}>
          <TouchableOpacity
            style={
              ShownLetters[12] == "" ? this.W4L1Style() : this.WordFourFull()
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

                this.lightUpBorderNotChosen("W4L1");

                this.setState({
                  wordFourTry:
                    this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordFourTry.substring(1, 20)
                });

                if (
                  this.state.choiceAnswer[this.state.tempIndex] +
                    this.state.wordFourTry.substring(1, 20) ==
                  wordFourAnswer
                ) {
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordFourTry != wordFourAnswer) {
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
              ShownLetters[12] != "" || this.state.wordFourTry == wordFourAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[13] == "" ? this.W4L2Style() : this.WordFourFull()
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
                  wordFourAnswer
                ) {
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordFourTry != wordFourAnswer) {
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
              ShownLetters[13] != "" || this.state.wordFourTry == wordFourAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[14] == "" ? this.W4L3Style() : this.WordFourFull()
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
                  wordFourAnswer
                ) {
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordFourTry != wordFourAnswer) {
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
              ShownLetters[14] != "" || this.state.wordFourTry == wordFourAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[15] == "" ? this.W4L4Style() : this.WordFourFull()
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
                  wordFourAnswer
                ) {
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordFourTry != wordFourAnswer) {
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
              ShownLetters[15] != "" || this.state.wordFourTry == wordFourAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L4}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[16] == "" ? this.W4L5Style() : this.WordFourFull()
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
                  wordFourAnswer
                ) {
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordFourTry != wordFourAnswer) {
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
              ShownLetters[16] != "" || this.state.wordFourTry == wordFourAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L5}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              ShownLetters[17] == "" ? this.W4L6Style() : this.WordFourFull()
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
                  wordFourAnswer
                ) {
                  this.setState({
                    score: this.state.score + 4
                  });
                }
                this.state.choiceAnswer[this.state.tempIndex] = "";
                this.state.tempIndex = -1;
              } else if (this.state.wordFourTry != wordFourAnswer) {
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
              ShownLetters[17] != "" || this.state.wordFourTry == wordFourAnswer
            }
          >
            <Text style={styleShape.appButtonText}>{this.state.W4L6}</Text>
          </TouchableOpacity>
        </View>

        <View style={styleShape.container}>
          {this.state.choiceAnswer[0] != "" ? (
            <TouchableOpacity
              style={
                this.state.choiceAnswer[0] == ""
                  ? this.DragOne()
                  : this.DragOne(
                      this.state.changeBorderColor,
                      this.state.changeBorderColor
                    )
              }
              onPress={() => {
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
              style={this.DragOne()}
              onPress={() => {
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
              style={this.DragOne()}
              onPress={() => {
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
              style={this.DragOne()}
              onPress={() => {
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
              style={this.DragOne()}
              onPress={() => {
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

        <View style={styleShape.container}>
          {this.state.choiceAnswer[5] != "" ? (
            <TouchableOpacity
              style={this.DragTwo()}
              onPress={() => {
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
              style={this.DragTwo()}
              onPress={() => {
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
              style={this.DragTwo()}
              onPress={() => {
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
              style={this.DragTwo()}
              onPress={() => {
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
              style={this.DragTwo()}
              onPress={() => {
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

  W1L1Style = function() {
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

  W1L2Style = function() {
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

  W1L3Style = function() {
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

  WordOneFull = function() {
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
        this.state.wordOneTry == wordOneAnswer
          ? greenColor
          : this.state.W1FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordOneTry == wordOneAnswer
          ? greenColor
          : this.state.W1FullColor
    };
  };

  WordTwoFull = function() {
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
        this.state.wordTwoTry == wordTwoAnswer
          ? greenColor
          : this.state.W2FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordTwoTry == wordTwoAnswer
          ? greenColor
          : this.state.W2FullColor
    };
  };

  WordThreeFull = function() {
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
        this.state.wordThreeTry == wordThreeAnswer
          ? greenColor
          : this.state.W3FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordThreeTry == wordThreeAnswer
          ? greenColor
          : this.state.W3FullColor
    };
  };

  WordFourFull = function() {
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
        this.state.wordFourTry == wordFourAnswer
          ? greenColor
          : this.state.W4FullColor,
      borderWidth: 5,
      borderColor:
        this.state.wordFourTry == wordFourAnswer
          ? greenColor
          : this.state.W4FullColor
    };
  };

  W2L1Style = function() {
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

  W2L2Style = function() {
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

  W2L3Style = function() {
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

  W2L4Style = function() {
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

  W3L1Style = function() {
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

  W3L2Style = function() {
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

  W3L3Style = function() {
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

  W3L4Style = function() {
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

  W3L5Style = function() {
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

  W4L1Style = function() {
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

  W4L2Style = function() {
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

  W4L3Style = function() {
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

  W4L4Style = function() {
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

  W4L5Style = function() {
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

  W4L6Style = function() {
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

  DragOne = function() {
    return {
      marginTop: 40,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderColor: greenColor
    };
  };

  DragTwo = function() {
    return {
      marginTop: 40,
      marginRight: 5,
      marginLeft: 5,
      justifyContent: "center",
      width: 55,
      height: 55,
      borderRadius: 10,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      backgroundColor: greenColor,
      borderColor: greenColor
    };
  };
}

const styleShape = StyleSheet.create({
  container: {
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
