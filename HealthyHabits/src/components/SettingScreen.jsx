import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, Animated} from 'react-native';
import { Header, Slider, CheckBox, Button } from "react-native-elements";
import {Ionicons} from '@expo/vector-icons'
import main from '../styles/main.js';

{/*##########################################
                    Main
  ##########################################*/}
export default class Setting extends Component{
  constructor(props){
    super(props)
    this.updateChanges = this.updateChanges.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.state = {
      diff: 1,
      dark: false
    }
  }

  updateChanges(setting, data){
    if (setting === "theme"){
      this.setState({
        dark: data
      }, () => console.log("from setting ",this.state.dark))
    } else if (setting === "diff"){
      this.setState({
        diff: data
      }, () => console.log("from setting ",this.state.diff))
    }
  }

  saveChanges(){
    this.props.updateSetting("diff", this.state.diff)
    this.props.updateSetting("theme", this.state.dark)
  }

  render(){
    return(
      <View style={[this.props.dark ? main.darkContainer: styles.container]}>
        <View style={styles.innerContainer}>
          <Sound 
            dark={this.props.dark}/>
          <Game 
            updateChanges={this.updateChanges}
            diffculty={this.props.diffculty}
            dark={this.props.dark}/>
          <Apperance 
            updateChanges={this.updateChanges}
            dark={this.props.dark}/>
          
          <Button
          buttonStyle={styles.saveButton}
          titleStyle={styles.saveTitle}
          title="Save Changes"
          onPress={this.saveChanges}
          />
        </View>
      </View>
    )
  }
}

{/*##########################################
                    Sound Setting
  ##########################################*/}
const Sound = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  let iconColor = props.dark ? "white" : "black"
  return(
    <View>
      <View style={styles.secHeader}>
        <Ionicons name="volume-medium-outline" size={30} color={iconColor} style={styles.icon}></Ionicons>
        <Text style={[props.dark ? styles.titleDark : styles.title]}>Sound</Text>
      </View>
      <View style={styles.itemContainer}>
      <View style={[props.dark ? styles.soundTopCompDark : styles.soundTopComp]}>
        <Ionicons name="volume-off-outline" size={30} ></Ionicons>
        <View style={styles.volume}>
          <Slider 
            thumbStyle={{ height: 30, width: 30, backgroundColor: 'white' }}
            thumbProps={{Component: Animated.Image,
              source: {uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',},}}
            maximumValue={10}
            minimumValue={0}
            value ={7}
            step={1}/>
        </View>
        <Ionicons name="volume-high-outline" size={30} ></Ionicons>
      </View>
      <View style={[props.dark ? styles.soundBotCompDark : styles.soundBotComp]}>
        <Text style={styles.item}>Mute</Text>
        <View style={styles.switch}>
          <Switch 
            trackColor={{ false: "#2e6a75", true: "#2e6a75" }}
            onValueChange={toggleSwitch}
            value={isEnabled}/>
        </View>
      </View>
      </View>
    </View>
  );
}

{/*##########################################
                    Game Setting
  ##########################################*/}
const Game = (props) => {
  let iconColor = props.dark ? "white" : "black"
  return(
    <View>
      <View style={styles.secHeader}>
        <Ionicons name="game-controller-outline" size={30} color={iconColor} style={styles.icon}></Ionicons>
        <Text style={[props.dark ? styles.titleDark : styles.title]}>Game Diffculty</Text>
      </View>
      <View style={styles.itemContainer}>
        <Diffculty 
          updateChanges={props.updateChanges}
          diffculty={props.diffculty}/>
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
        {title: 'Normal',checked: false},
        {title: 'Hard',checked: false}
      ]
    };
  }

  componentDidMount(){
    const options = this.state.options.map((opt, i) => {
      if (i !== this.props.diffculty)return {...opt,checked: false,}
      if (i === this.props.diffculty) {
        const item = {...opt,checked: !opt.checked,}
        return item
      }
     return opt
   })
   this.setState({options: options,})
  }

  checkboxHandler(index){
    const options = this.state.options.map((opt, i) => {
      if (i !== index)return {...opt,checked: false,}
      if (i === index) {
        const item = {...opt,checked: !opt.checked,}
        return item
      }
     return opt
    })
    this.setState({options: options,})
    this.props.updateChanges("diff", index)
  }
  render() {
    return (
      <View style={styles.gameComp}>
        {this.state.options.map((opt, i) =>(
          <CheckBox
            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 0}}
            uncheckedColor={'white'}
            checkedColor={'#2e6a75'}
            center
            title={opt.title}
            textStyle={{color: 'black',fontWeight: 'normal',}}
            checked={opt.checked}
            key={opt.title}
            onPress={() => this.checkboxHandler(i)}/>))}
      </View>
    )
  }
}

{/*##########################################
                    Apperance Setting
  ##########################################*/}
class Apperance extends Component{
  constructor(props){
    super(props)
    this.toggleSwitch = this.toggleSwitch.bind(this)
    this.state = {
      isEnabled: false
    }
  }
  componentDidMount(){
    this.setState({
      isEnabled: this.props.dark
    });
  }

  toggleSwitch(){
    this.setState({
      isEnabled: !this.state.isEnabled,
    }, () => this.props.updateChanges("theme", this.state.isEnabled));
  }

  render(){
    let iconColor = this.props.dark ? "white" : "black"
    return(
      <View>
      <View style={styles.secHeader}>
        <Ionicons name="contrast-sharp" size={30} color={iconColor} style={styles.icon}></Ionicons>
        <Text style={[this.props.dark ? styles.titleDark : styles.title]}>Display</Text>
      </View>
      <View style={styles.itemContainer}>
      <View style={styles.displayComp}>
        <Text style={styles.item}>Dark Theme</Text>
        <View style={styles.switch}>
          <Switch 
            trackColor={{ false: "#2e6a75", true: "#2e6a75" }}
            onValueChange={this.toggleSwitch}
            value={this.state.isEnabled}
          />
        </View>
      </View>
      </View>
    </View>
    )
  }
}
const Apper = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  let iconColor = props.dark ? "white" : "black"
  useEffect(() => {
    setIsEnabled(props.dark)
  },[props.dark])
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    setIsEnabled(async (state)  => {
      await console.log("from apperance ", state); 
      return state;
    }, console.log("hi"));
    console.log("from apperance2 ", isEnabled); 
    props.updateChanges("theme", isEnabled)
  }
  return(
    <View>
      <View style={styles.secHeader}>
        <Ionicons name="contrast-sharp" size={30} color={iconColor} style={styles.icon}></Ionicons>
        <Text style={[props.dark ? styles.titleDark : styles.title]}>Display</Text>
      </View>
      <View style={styles.itemContainer}>
      <View style={styles.displayComp}>
        <Text style={styles.item}>Dark Theme</Text>
        <View style={styles.switch}>
          <Switch 
            trackColor={{ false: "#2e6a75", true: "#2e6a75" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      </View>
    </View>


  );
}

//Colors
const color1 = '#85CBCC'
const color2 = '#A8DEE0'
const color3 = '#F9E2AE'
const color4 = '#FBC78D'
const color5 = '#A7D676'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color1,
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
  titleDark: {
    fontSize: 30,
    color: "white",
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
  },
  saveButton:{
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: color2,
    borderRadius: 40, 
  },
  saveTitle:{
    fontSize: 22,
    color: "black",
  },
  soundTopComp:{
    flexDirection: "row",
    backgroundColor: color2,
    padding: 15,
    borderBottomColor: color1,
    borderBottomWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  soundBotComp: {
    flexDirection: "row",
    backgroundColor: color2,
    padding: 15,
    borderTopColor: color1,
    borderTopWidth: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  soundTopCompDark:{
    flexDirection: "row",
    backgroundColor: color2,
    padding: 15,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  soundBotCompDark: {
    flexDirection: "row",
    backgroundColor: color2,
    padding: 15,
    borderTopColor: '#000',
    borderTopWidth: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  gameComp:{
    flexDirection: "row",
    backgroundColor: color2,
    padding: 10,
    borderRadius: 20,
  },
  displayComp:{
    flexDirection: "row",
    backgroundColor: color2,
    padding: 15,
    borderRadius: 20,
  }
});