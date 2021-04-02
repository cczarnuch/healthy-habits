import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

/*###########################################################################
                              Main
###########################################################################*/
export default class MemoryGame extends Component {
  constructor(props){
    super(props);

    let source = {'ionicons': Ionicons};
    let cards = [
      {src: 'ionicons', name: 'baseball', color: '#bebfa4'},
      {src: 'ionicons', name: 'heart', color: 'red'},
      {src: 'ionicons', name: 'calendar', color: '#497dde'},
      {src: 'ionicons', name: 'pulse', color: 'black'},
      {src: 'ionicons', name: 'barbell', color: 'black'},
      {src: 'ionicons', name: 'american-football', color: 'brown'},
      {src: 'ionicons', name: 'basketball', color: '#FA8320'},
      {src: 'ionicons', name: 'bicycle', color: '#2e29c4'},
      {src: 'ionicons', name: 'football', color: 'black'},
      {src: 'ionicons', name: 'nutrition', color: 'red'},
      {src: 'ionicons', name: 'walk', color: 'black'},
      {src: 'ionicons', name: 'tennisball', color: '#b9d444'}
    ];
    let clone = JSON.parse(JSON.stringify(cards));

    this.cards = cards.concat(clone);
    this.cards.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;
      obj.src = source[obj.src];
      obj.reveal = false;
    });

    this.cards = this.cards.shuffle(); 
    this.state = {
      current_selection: [],
      selected_pairs: [],
      diffculty: 0,
      score: 0,
      cards: this.cards
    }
  }
  render() {
    console.log("hi");
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
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
                              StyleSheet
###########################################################################*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 18,
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20
  }
});