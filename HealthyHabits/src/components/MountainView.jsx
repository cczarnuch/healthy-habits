import React, { useState } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/main.js'
import mPicture from '../assets/cartoon_mountain.png'

const MountainView = () => {
    return (
        <View style={styles.container}>
            <Button style="settingsButton" title="Settings"></Button>
            <Text>I AM FROM MOUNTAIN VIEW</Text>
            <Image source={mPicture} style={styles.img} />
        </View>
    )
}

export default MountainView