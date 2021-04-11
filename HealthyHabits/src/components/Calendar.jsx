import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Icon, Overlay } from "react-native-elements";
import { Dayjs } from "dayjs";
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
        rightComponent={<Icon name="settings" color="white" onPress={displaySettingsScreen}></Icon> }
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
          onDayPress={day => {
            console.log("selected day", day);
            Alert.alert(
              'Your activity on ' + day.dateString + ':\n\n',
              "Workout Game: \n\n" +
              "Math Game: \n\n" +
              "Word Game: \n\n" +
              "Memorization Game: \n\n" +
              "Meditation Game: \n\n" +
              "Journal: ",
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
      <Overlay isVisible={visible} fullScreen={true}>
        <Header
            statusBarProps={{ barStyle: "light-content" }}
            barStyle="light-content" 
            rightComponent={<Icon  name="close" color="white" style={styles.back} size={30} onPress={displaySettingsScreen}></Icon>}
            centerComponent={{text: "Settings",style: { color: "#FFF", fontSize: 22 }}}
            containerStyle={{backgroundColor: "#85C3CF",justifyContent: "space-around"}}
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
