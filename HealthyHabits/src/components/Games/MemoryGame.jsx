import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

/*###########################################################################
                              Main
###########################################################################*/
export default class MemoryGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_selection: [],
      selected_pairs: [],
      cardsPerDiff: [8,10,12],
      diffculty: 2,
      score: 0,
      deck: [],
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
    },() => console.log(deck.length));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.score}><Text>Score</Text></View>
        <View style={styles.body}>
          {this.renderRows.call(this)}
        </View>
        <View style={styles.timer}><Text>Timer</Text></View>
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
    //let score = this.state.score;
    let index = this.state.deck.findIndex((card) => {return card.id == id;});
    let prevIndex = 0
    let deck = this.state.deck;
    
    if(deck[index].reveal == false && selected_pairs.indexOf(deck[index].name) === -1){
      deck[index].reveal = true;
      current_selection.push({ 
        index: index,
        name: deck[index].name
      });

      if(current_selection.length == 2){
        if(current_selection[0].name == current_selection[1].name){
          //score += 1;
          selected_pairs.push(deck[index].name);
        }else{
          prevIndex = current_selection[0].index
          setTimeout(() => {
            deck[prevIndex].reveal = false;
            deck[index].reveal = false;
            this.setState({
              deck: deck
            });
          }, 750);
        }
        current_selection = [];
      }

      this.setState({
        //score: score,
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
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 10,
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 20,
  },
  card: {
    flex: 1,
		alignItems: 'center',
	},
	card_text: {
		fontSize: 50,
		fontWeight: 'bold'
	},
  score: {
    flex: 1,
		alignItems: 'center',
    marginTop: 75,
  },
  timer: {
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
});