import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";
import { Dayjs } from "dayjs";

// function join(t, a, s) {
//   function format(m) {
//     let f = new Intl.DateTimeFormat("en", m);
//     return f.format(t);
//   }
//   return a.map(format).join(s);
// }

// var a = [{ year: "numeric" }, { month: "2-digit" }, { day: "2-digit" }];
// var sToday = join(new Date(), a, "-");

const CalendarPage = ({ styles }) => {
  return (
    <SafeAreaProvider>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content" // or directly
        rightComponent={{ icon: "settings", color: "#fff" }}
        centerComponent={{
          text: "Calendar",
          style: { color: "#FFF", fontSize: 22 }
        }}
        containerStyle={{
          backgroundColor: "#85C3CF",
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
          }}
          maxDate={new Date()}
          vertical={true}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default CalendarPage;
