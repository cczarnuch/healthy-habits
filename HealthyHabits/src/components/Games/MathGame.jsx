import React from "react";
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import CountDown from 'react-native-countdown-component';

class MathGame extends React.Component {
    state = {
        points: 0,
        question_1: 0,
        question_2: 0,
        question_sign: 'X',
        actual_answer: 0,
        answers: [0, 0, 0, 0]
    };

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
            question_1 = Math.floor(Math.random() * 10);
            question_2 = Math.floor(Math.random() * 10);
            answer = question_1 * question_2;
            random_answer_1 = Math.floor(Math.random() * 100);
            random_answer_2 = Math.floor(Math.random() * 100);
            random_answer_3 = Math.floor(Math.random() * 100);
            answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        }
        //Addition
        else if (random_question_type> 2 && random_question_type<= 5) {
            console.log('Addition');
            sign = '+';
            question_1 = Math.floor(Math.random() * 50);
            question_2 = Math.floor(Math.random() * 50);
            answer = question_1 + question_2;
            random_answer_1 = answer + (Math.floor(Math.random() * 15) + 6);
            random_answer_2 = answer - (Math.floor(Math.random() * 6) + 1);
            random_answer_3 = answer + (Math.floor(Math.random() * 6) + 1);
            answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        }
        //Subtraction
        else if (random_question_type > 5 && random_question_type<= 8) {
            console.log('Subtraction');
            sign = '-';
            question_1 = (Math.floor(Math.random() * 100) + 50);
            question_2 = Math.floor(Math.random() * 50);
            answer = question_1 - question_2;
            random_answer_1 = Math.floor(Math.random() * 50);
            random_answer_2 = Math.floor(Math.random() * 50);
            random_answer_3 = Math.floor(Math.random() * 50);
            answers = [answer, random_answer_1, random_answer_2, random_answer_3];
        }
        //Division
        else {
            console.log('Division');
            sign = '/';
            temp_1 = Math.floor(Math.random() * 20) + 1;
            temp_2 = Math.floor(Math.random() * 6) + 1;
            question_1 = temp_1 * temp_2;
            question_2 = temp_1;
            answer = temp_2;
            random_answer_1 = Math.floor(Math.random() * 9) + 0;
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
            points: this.state.points + 1
        });
        } else if (this.state.points != 0){
        this.setState({
            points: this.state.points - 1
        });
        }
        this.generate_question();
    }

    time_done() {
        alert('Time done! You finished with ' + this.state.points + ' point(s)!');
    }

render() {
    return (
        <View className="container" style={body}>
            <View className="title" style={title}>
                <Text></Text>
                <Text style={title}>Math Game</Text>
                <Text></Text>
            </View>
            <View className="points" style={points}>
                <Text></Text>
                <Text style={points}>Points: {this.state.points}</Text>
            </View>
            <View className="countdown" style={countdown}>
                <CountDown
                    until={60 * 1}
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
                    onPress={() => this.check_answer(this.state.answers[0])}
                    title={this.state.answers[0]}>
                </Button>
                <Text></Text>
                <Button 
                    onPress={() => this.check_answer(this.state.answers[1])}
                    title={this.state.answers[1]}>
                </Button>
                <Text></Text>
                <Button 
                    onPress={() => this.check_answer(this.state.answers[2])}
                    title={this.state.answers[2]}>
                </Button>
                <Text></Text>
                <Button 
                    onPress={() => this.check_answer(this.state.answers[3])}
                    title={this.state.answers[3]}>
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
    backgroundColor: "#fcecb1"
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
    textAlign: "center",
    backgroundColor: "black"
};

export default MathGame;