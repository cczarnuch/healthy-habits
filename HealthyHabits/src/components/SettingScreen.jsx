import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, Animated} from 'react-native';
import { Header, Slider, CheckBox } from "react-native-elements";
import {Ionicons} from '@expo/vector-icons'

export default class Setting extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content" 
        centerComponent={{text: "Setting",style: { color: "#FFF", fontSize: 22 }}}
        containerStyle={{backgroundColor: "#85C3CF",justifyContent: "space-around"}}
        />
        <View style={styles.innerContainer}>
          <Sound />
          <Game />
          <Apperance />
        </View>
      </View>
    )
  }
}

const Sound = (props) => {
  return(
    <View>
      <View style={styles.secHeader}>
        <Ionicons name="volume-medium-outline" size={30} style={styles.icon}></Ionicons>
        <Text style={styles.title}>Sound</Text>
      </View>
      <View style={styles.itemContainer}>
      <View style={{
        flexDirection: "row",
        backgroundColor: '#85C3CF',
        padding: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,}}>
        <Ionicons name="volume-off-outline" size={30} ></Ionicons>
        <View style={styles.volume}>
          <Slider 
            thumbStyle={{ height: 30, width: 30, backgroundColor: 'white' }}
            thumbProps={{
              Component: Animated.Image,
              source: {
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              },
            }}
            maximumValue={10}
            minimumValue={0}
            value ={7}
            step={1}
            />
        </View>
        <Ionicons name="volume-high-outline" size={30} ></Ionicons>
      </View>
      <View style={{
        flexDirection: "row",
        backgroundColor: '#85C3CF',
        padding: 15,
        borderTopColor: '#FFF',
        borderTopWidth: '1',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,}}>
        <Text style={styles.item}>Mute</Text>
        <View style={styles.switch}><Switch /></View>
      </View>
      </View>
    </View>
  );
}

const Game = (props) => {
  return(
    <View>
      <View style={styles.secHeader}>
        <Ionicons name="game-controller-outline" size={30} style={styles.icon}></Ionicons>
        <Text style={styles.title}>Game Diffculty</Text>
      </View>
      <View style={styles.itemContainer}>
        <Diffculty />
      </View>
    </View>
  );
}

const Apperance = (props) => {
  return(
    <View>
      <View style={styles.secHeader}>
        <Ionicons name="contrast-sharp" size={30} style={styles.icon}></Ionicons>
        <Text style={styles.title}>Display</Text>
      </View>
      <View style={styles.itemContainer}>
      <View style={{
        flexDirection: "row",
        backgroundColor: '#85C3CF',
        padding: 15,
        borderRadius: 20,}}>
        <Text style={styles.item}>Dark Theme</Text>
        <View style={styles.switch}><Switch /></View>
      </View>
      </View>
    </View>
  );
}

class Diffculty extends Component{
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {title: 'Easy',checked: false},
        {title: 'Normal',checked: true},
        {title: 'Hard',checked: false}
      ]
    };
  }
  checkboxHandler(index){
    const options = this.state.options.map((opt, i) => {
      if (i !== index)
        return {
          ...opt,
          checked: false,
        }
      if (i === index) {
        const item = {
          ...opt,
          checked: !opt.checked,
        }
        return item
      }
     return opt
   })
   this.setState({
     options: options,
   })
  }

  render() {
    return (
      <View style={{
        flexDirection: "row",
        backgroundColor: '#85C3CF',
        padding: 10,
        borderRadius: 20,}}>
        {this.state.options.map((opt, i) =>(
          <CheckBox
            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent',}}
            uncheckedColor={'white'}
            checkedColor={'black'}
            center
            title={opt.title}
            textStyle={{color: 'black',fontWeight: 'normal',}}
            checked={opt.checked}
            key={opt.title}
            onPress={() => this.checkboxHandler(i)}
          />
        ))}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    marginTop: 32,
    padding: 15,
  },
  secHeader:{
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
  },
  icon: {
    paddingRight: 10,
  },  
  volume:{
    flex: 1, 
    alignItems: 'stretch', 
    justifyContent: 'center', 
    paddingLeft: 10,
    paddingRight: 20,
  },
  itemContainer:{
    margin: 10,
  },
  switch:{
    flex: 1, 
    alignItems: 'flex-end'
  },
  item:{
    color: 'black',
    fontSize: 20,
    textAlignVertical: 'center',
  }
});