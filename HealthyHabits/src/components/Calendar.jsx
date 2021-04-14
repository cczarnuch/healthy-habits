import React, { useState } from "react";
import { View, Alert } from "react-native";
import { CalendarList } from "react-native-calendars";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Icon, Overlay } from "react-native-elements";
import Setting from '../components/SettingScreen';
import styles from '../styles/main'

// function join(t, a, s) {
//   function format(m) {
//     let f = new Intl.DateTimeFormat("en", m);
//     return f.format(t);
//   }
//   return a.map(format).join(s);
// }

// var a = [{ year: "numeric" }, { month: "2-digit" }, { day: "2-digit" }];
// var sToday = join(new Date(), a, "-");

const CalendarPage = (props) => {

  const [visible, setVisible] = useState(false);

  const displaySettingsScreen = () => {
    console.log("toggle pressed")
    setVisible(!visible);
  };

  return (
    <SafeAreaProvider>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content" // or directly
        rightComponent={<Icon name="settings" color="white" onPress={displaySettingsScreen}></Icon>}
        centerComponent={{
          text: "Calendar",
          style: { color: "#FFF", fontSize: 22 }
        }}
        containerStyle={{
          backgroundColor: '#85CBCC',
          justifyContent: "space-around"
        }}
      />
      <View style={styles.Calendar}>
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={months => {
            console.log("now these months are visible", months);
          }}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          markedDates={{
            '2021-04-09': { marked: true, dotColor: '#5DB9BB' },
            '2021-04-10': { marked: true, dotColor: '#5DB9BB' },
            '2021-04-14': { selected: true, marked: true, selectedColor: '#85CBCC', dotColor: 'white' }
          }}
          onDayPress={day => {
            let workout_log = ""; let math_log = ""; let word_log = "";
            let memorization_log = ""; let meditation_log = ""; let journal_log = "";
            console.log(props.playerData);
            //console.log(props.playerData[day.dateString].math);
            if (day.dateString in props.playerData) {
              if ("workout" in props.playerData[day.dateString]) { workout_log = props.playerData[day.dateString].workout + " points"; }
              if ("math" in props.playerData[day.dateString]) { math_log = props.playerData[day.dateString].math + " points"; }
              if ("word" in props.playerData[day.dateString]) { word_log = props.playerData[day.dateString].word + " points"; }
              if ("memorization" in props.playerData[day.dateString]) { memorization_log = props.playerData[day.dateString].memorization + " points"; }
              if ("meditation" in props.playerData[day.dateString]) { meditation_log = props.playerData[day.dateString].meditation + " points"; }
              if ("journal" in props.playerData[day.dateString]) {
                let temp = props.playerData[day.dateString].journal;
                if (temp.includes(null)) { temp[0] = ""; };
                journal_log = "Mood was a " + temp[1] + " out of 10. " + temp[0];
              }
            }
            else { console.log("Date selected does not exist in playerData"); }

            Alert.alert(
              'Your activity on ' + day.dateString + ':\n\n',
              "Workout Game:  " + workout_log + "\n\n" +
              "Math Game:  " + math_log + "\n\n" +
              "Word Game:  " + word_log + "\n\n" +
              "Memorization Game:  " + memorization_log + "\n\n" +
              "Meditation Game:  " + meditation_log + "\n\n" +
              "Journal:  " + journal_log,
              [
                {
                  text: "OK",
                  onPress: () => console.log("Closed activity info screen")
                }
              ]
            )
          }}
          maxDate={new Date()}
          vertical={true}
        />
      </View>

      {/* Settings Overlay toggled when settings Icon is clicked */}
      <Overlay isVisible={visible} fullScreen={true} overlayStyle={[props.dark ? styles.darkContainer : styles.container]}>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          rightComponent={<Icon name="close" color="white" style={styles.back} size={30} onPress={displaySettingsScreen}></Icon>}
          centerComponent={{ text: "Settings", style: { color: "#FFF", fontSize: 22 } }}
          containerStyle={{ backgroundColor: "#85CBCC", justifyContent: "space-around" }}
        />
        <Setting
          updateSetting={props.updateSetting}
          dark={props.dark} diffculty={props.diffculty}>
        </Setting>

      </Overlay>

    </SafeAreaProvider>
  );
};

export default CalendarPage;
