import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {Overlay, Header, Icon} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

/*###########################################################################
                              Main
###########################################################################*/
export default class MemoryGame extends Component {
  constructor(props){
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);

    this.state = {
      current_selection: [],
      selected_pairs: [],
      cardsPerDiff: [8,10,12],
      diffculty: 0,
      score: 0,
      found: 0,
      runningTime: 0,
      deck: [],
      stop: true,
      start: false,
      timer: null,
      counter: '00',
      miliseconds: '00',
      visible: false,
    }
  }

  //Initialize the deck of cards based on diffculty
  componentDidMount(){
    let pool = [
      {name: 'baseball', color: '#bebfa4'},
      {name: 'heart', color: 'red'},
      {name: 'calendar', color: '#497dde'},
      {name: 'pulse', color: 'black'},
      {name: 'barbell', color: 'black'},
      {name: 'american-football', color: 'brown'},
      {name: 'basketball', color: '#FA8320'},
      {name: 'bicycle', color: '#2e29c4'},
      {name: 'football', color: 'black'},
      {name: 'nutrition', color: 'red'},
      {name: 'walk', color: 'black'},
      {name: 'tennisball', color: '#b9d444'}
    ];

    let cards = pool.slice(0,this.state.cardsPerDiff[this.state.diffculty])
    let clone = JSON.parse(JSON.stringify(cards));
    let deck = cards.concat(clone);
    deck.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;
      obj.reveal = false;
    });

    deck = deck.shuffle(); 
    this.setState({
      current_selection: [],
      selected_pairs: [],
      deck: deck,
    });
    this.start();
  }

  componentWillUnmount(){
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          leftComponent={<Ionicons  name="arrow-back-outline" color="#000" style={styles.back} size={30}></Ionicons>}
          centerComponent={{
            text: "Memory Game",
            style: { color: "#FFF", fontSize: 22 }
          }}
          containerStyle={{
            backgroundColor: "#85C3CF",
            justifyContent: "space-around"
        }}/>
        <View style={styles.innerContainer}>
          
        <Text style={styles.counter}>Time: {this.state.counter}
            <Text style={styles.miniCounter}>.{this.state.miliseconds}</Text>
          </Text>
        </View>
        <View style={styles.body}>
          {this.renderRows.call(this)}
        </View>
        <Overlay isVisible={this.state.visible} overlayStyle={{height: 50}}>
          <Text>Score: {this.state.counter}{this.state.miliseconds}</Text>
        </Overlay>
        {/* <View style={styles.pad}></View> */}
      </View>
    );
  }

  //render each Row
  renderRows() {
    let contents = this.getRowContents(this.state.deck);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          { this.renderCards(cards) }
        </View>
      );
    });
  }

  //Render each card
  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card 
          key={index} 
          src={card.src} 
          name={card.name} 
          color={card.color} 
          reveal={card.reveal}
          clickCard={this.clickCard.bind(this, card.id)} 
        />
      );
    });
  }

  //When cards is selected
  clickCard(id) {
    let selected_pairs = this.state.selected_pairs;
    let current_selection = this.state.current_selection;
    let found = this.state.found;
    let index = this.state.deck.findIndex((card) => {return card.id == id;});
    let prevIndex = 0;
    let deck = this.state.deck;
    let visible = this.state.visible;
    
    if(deck[index].reveal == false && selected_pairs.indexOf(deck[index].name) === -1){
      deck[index].reveal = true;
      current_selection.push({ 
        index: index,
        name: deck[index].name
      });

      if(current_selection.length == 2){
        if(current_selection[0].name == current_selection[1].name){
          found += 1;
          if (found === this.state.cardsPerDiff[this.state.diffculty]){
            this.stop();
            visible = true;
          }
          selected_pairs.push(deck[index].name);
        }else{
          prevIndex = current_selection[0].index
          setTimeout(() => {
            deck[prevIndex].reveal = false;
            deck[index].reveal = false;
            this.setState({
              deck: deck
            });
          }, 500);
        }
        current_selection = [];
      }

      this.setState({
        visible: visible,
        found: found,
        deck: deck,
        current_selection: current_selection,
      });
    }
  }

  //Sends back a deck with 4 cards per row
  getRowContents(deck) {
    let board = [];
    let row = [];
    let count = 0;
    deck.forEach((card) => {
      count += 1;
      row.push(card);
      if(count == 4){
        board.push(row)
        count = 0;
        row = [];
      }
    });
    return board;
  }

/*###########################################################################
                              Stopwatch
###########################################################################*/
  start() {
    let timer = setInterval(() => {
      var num = (Number(this.state.miliseconds) + 1).toString(),
      count = this.state.counter;
      if( Number(this.state.miliseconds) == 99 ) {
        count = (Number(this.state.counter) + 1).toString();
        num = '00';
      }
      this.setState({
        counter: count.length == 1 ? '0'+count : count,
        miliseconds: num.length == 1 ? '0'+num : num
      });
    }, 0);
    this.setState({timer});
  }

  stop(){clearInterval(this.state.timer);}
}

/*###########################################################################
                              Shuffle Function
###########################################################################*/
Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if(i == 0) return this;
  while(--i){
   j = Math.floor(Math.random() * (i + 1));
   temp = this[i];
   this[i] = this[j];
   this[j] = temp;
  }
  return this;
}

/*###########################################################################
                              Card Component
###########################################################################*/
class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let icon_name = 'help';
		let icon_color = '#fff';
		let faceUp = false

		if(this.props.reveal){
			icon_name = this.props.name;
			icon_color = this.props.color;
      faceUp = true
		}
		return (
			<View style={styles.card}>
				<TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75} underlayColor={"#f1f1f1"}>
					<Ionicons 
						name={icon_name} 
						size={80} 
						color={icon_color} 
            style={[faceUp ? styles.faceUp : styles.faceDown]}
					/>
				</TouchableHighlight>		
			</View>
		);
	}
}

/*###########################################################################
                              StyleSheet
###########################################################################*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e7e0df'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 10,
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 30,
  },
  card: {
    flex: 1,
		alignItems: 'center',
	},
	card_text: {
		fontSize: 50,
		fontWeight: 'bold'
	},
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  pad: {
    flex: 1,
		alignItems: 'center',
    marginBottom: 50,
  },
  faceUp:{
    borderColor: "#6f4f0f",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "#63afae",
  },
  faceDown:{
    borderColor: "#6f4f0f",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "#a1cfce",
  },
  counter: {
    flex: 5,
    fontSize: 60,
    textAlign: 'left',
    height: 60,
    margin: 10,
    marginLeft: 90,
  },
  miniCounter: {
    fontSize:20,
    position: 'relative',
    top: -32,
    right: -50
  },
  back:{ 
    flex: 1,
    alignSelf: 'flex-start',
  },
  endScreen: {
    height: 30,
  },
});