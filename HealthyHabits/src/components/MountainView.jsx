import React, { useState } from 'react';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/main.js'

const MountainView = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source="../assets/cartoon_mountain.png" styles={{width: '100%', height: '100%'}}>
                <Button style="settingsButton" title="Settings"></Button>
                <Text>I AM FROM MOUNTAIN VIEW</Text>
            </ImageBackground>
        </View>
    )
}

export default MountainView