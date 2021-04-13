import React from "react";
import { Header, Icon } from 'react-native-elements';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import CountDown from 'react-native-countdown-component';
import {Ionicons} from '@expo/vector-icons';

class MathGame extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            correct: 0,
            incorrect: 0,
            counter: 10,
            counter_id: '0',
            question_1: 0,
            question_2: 0,
            question_sign: 'X',
            actual_answer: 0,
            answers: [0, 0, 0, 0],
        };
        this.handleBack = this.handleBack.bind(this);
    }


    //return to game menu
    handleBack(){
        this.props.setIndex(2);
        this.props.setMain(true);
    }

    mix(array) {
        var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    
        while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
    
        return array;
    }

    generate_question() {
        //Initialize variables
        let answer = 0;
        let random_answer_1 = 0;
        let random_answer_2 = 0;
        let random_answer_3 = 0; 
        let question_1 = 0;
        let question_2 = 0;
        let sign = 0;
        let random_question_type = Math.floor(Math.random()*10);
        let answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        console.log(random_question_type);
        //Multiplication
        if (random_question_type<= 2) {
            console.log('Multiplication');
            sign = 'X';
            question_1 = Math.floor(Math.random() * 10)+1;
            question_2 = Math.floor(Math.random() * 10)+1;
            answer = question_1 * question_2;
            random_answer_1 = Math.floor(Math.random() * 100)+1;
            random_answer_2 = Math.floor(Math.random() * 100)+1;
            random_answer_3 = Math.floor(Math.random() * 100)+1;
            answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        }
        //Addition
        else if (random_question_type> 2 && random_question_type<= 5) {
            console.log('Addition');
            sign = '+';
            question_1 = Math.floor(Math.random() * 50)+10;
            question_2 = Math.floor(Math.random() * 50)+10;
            answer = question_1 + question_2;
            random_answer_1 = answer + (Math.floor(Math.random() * 15) + 8);
            random_answer_2 = Math.floor(Math.random() * 10) + 1;
            random_answer_3 = answer + (Math.floor(Math.random() * 6) + 1);
            answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        }
        //Subtraction
        else if (random_question_type > 5 && random_question_type<= 8) {
            console.log('Subtraction');
            sign = '-';
            question_1 = (Math.floor(Math.random() * 100) + 50);
            question_2 = Math.floor(Math.random() * 50)+1;
            answer = question_1 - question_2;
            random_answer_1 = Math.floor(Math.random() * 50)+1;
            random_answer_2 = Math.floor(Math.random() * 50)+1;
            random_answer_3 = Math.floor(Math.random() * 50)+1;
            answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        }
        //Division
        else {
            console.log('Division');
            sign = '÷';
            let temp_1 = Math.floor(Math.random() * 20) + 1;
            let temp_2 = Math.floor(Math.random() * 6) + 1;
            question_1 = temp_1 * temp_2;
            question_2 = temp_1;
            answer = temp_2;
            random_answer_1 = Math.floor(Math.random() * 9) + 1;
            random_answer_2 = Math.floor(Math.random() * 20) + 14;
            random_answer_3 = Math.floor(Math.random() * 15) + 9;
            if (random_answer_1 == answer) { random_answer_1 += 1;}
            else if (random_answer_2 == answer) { random_answer_2 += 1;}
            else if (random_answer_3 == answer) { random_answer_3 += 1;}
            answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        }
    
        console.log("Answers: ");
        console.log(answers[0] + ', ' + answers[1] + ', ' + answers[2] + ', ' + answers[3]);
        
        this.setState({
        question_sign: sign,
        question_1: question_1,
        question_2: question_2,
        actual_answer: answer,
        answers: this.mix(answers)
        });
    }

    componentDidMount() {
        this.generate_question();
    }
    
    check_answer(answer) {
        
        console.log("check_answer called")
        if (this.state.actual_answer == answer) {
            this.setState({
                correct: this.state.correct + 1
            });
        }
        else { 
            this.setState({
                incorrect: this.state.incorrect + 1
            });
        } 
        this.generate_question();
    }

    play_again() {
        console.log("Playing again")
        let counter_temp = parseInt(this.state.counter_id) + 1;
        this.setState({
            counter_id: counter_temp.toString(),
            counter: 10,
            correct: 0,
            incorrect: 0
        });
        console.log(this.state.counter)
        this.generate_question()
    }

    finish_game = (points) => {
        this.props.updatePoints(points, this.props.mathActive)
        this.props.updatePlayerData('math', points, this.props.mathActive)
        if (this.props.mathActive) {
            this.props.setMathActive(false);
        }
        console.log('Returning to MountainView')
        this.handleBack(); 
    }

    time_done = () => {
        let average = 0;
        if (this.state.correct == 0 && this.state.incorrect == 0) {
            average = 0;
        }
        else {
            average = Math.ceil((this.state.correct/(this.state.correct + this.state.incorrect))*100);
        }

        let points = 0;
        let message = "";
        if (average >= 80) { points = 10; message = "Great score!"}
        else if (average >= 60 && average < 80) { points = 8; message = "Decent score!"}
        else if (average >= 40 && average < 60) { points = 6; message = "Okay score!"}
        else if (average >= 20 && average < 40) { points = 4; message = "Oh no!"}
        else { points = 2; message = "Oh no!" }

        Alert.alert(
            'Time Done',
            "Score: " + average + "%\n\n" + message + " Try again or exit to save progress.",
            [
                {
                    text: "Try Again",
                    onPress: () => this.play_again(),
                },
                {
                    text: "Save & Exit",
                    onPress: () => this.finish_game(points),
                }

            ]
        )
    }

render() {
    return (
        <View className="container" style={body}>
            <Text></Text>
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                barStyle="light-content"
                leftComponent={
                    <Icon  name="chevron-left" 
                    color="white"  
                    size={30}
                    onPress={this.handleBack}>
                    </Icon>}
                centerComponent={{
                    text: "Math Game",
                    style: { color: "#FFF", fontSize: 26 }
                }}
                containerStyle={{
                    backgroundColor: "#A8DEE0",
                    justifyContent: "space-around"
                }}
            />
            <View className="points" style={points}>
                <Text></Text>
                <Text style={points}>Correct: {this.state.correct}</Text>
                <Text style={points}>Incorrect: {this.state.incorrect}</Text>
            </View>
            <View className="countdown" style={countdown}>
                <CountDown
                    id={this.state.counter_id}
                    until={this.state.counter}
                    size={50}
                    onFinish={() => this.time_done()}
                    digitStyle={{backgroundColor: '#FFF'}}
                    digitTxtStyle={{color: '#1CC625'}}
                    timeToShow={['S']}
                    style={countdown_font}
                    //timeLabels={{m: 'M', s: 'S'}}
                />
            </View>
            <View className="question" style="question">
                <Text></Text>
                <Text style={question}>{this.state.question_1} {this.state.question_sign} {this.state.question_2} = ?</Text>
            </View>
            <View className="answers" style={answers}>
                <Button 
                    color="#85CBCC"
                    onPress={() => this.check_answer(this.state.answers[0])}
                    title={String(this.state.answers[0])}>
                </Button>
                <Text></Text>
                <Button 
                    color="#85CBCC"
                    onPress={() => this.check_answer(this.state.answers[1])}
                    title={String(this.state.answers[1])}>
                </Button>
                <Text></Text>
                <Button 
                    color="#85CBCC"
                    onPress={() => this.check_answer(this.state.answers[2])}
                    title={String(this.state.answers[2])}>
                </Button>
                <Text></Text>
                <Button 
                    color="#85CBCC"
                    onPress={() => this.check_answer(this.state.answers[3])}
                    title={String(this.state.answers[3])}>
                </Button>
            </View>
        </View>
    );
}
}

const body = {
    flex: 1,
    fontSize: 50,
    textAlign: "center",
    backgroundColor: "#F9E2AE"
};
const title = {
    position: "relative",
    top: 10,
    fontSize: 50,
    textAlign: "center",
};
const points = {
    position: "relative",
    top: "2%",
    fontSize: 25,
    textAlign: "center",
};
const countdown = {
    position: "relative",
    top: "6%",
    textAlign: "center",
};
const countdown_font = {
    fontSize: 10
};
const question = {
    position: "relative",
    top: "100%",
    textAlign: "center",
    fontSize: 40,
    textAlign: "center",
};
const answers = {
    position: "absolute",
    bottom: 30,
    left: 0, 
    right: 0,
    fontSize: 20,
    textAlign: "center"
};

const back = {
    flex: 1,
    alignSelf: 'flex-start'
}

export default MathGame;