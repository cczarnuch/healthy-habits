import { StyleSheet } from 'react-native';

const color1 = '#85CBCC'
const color2 = '#A8DEE0'
const color3 = '#F9E2AE'
const color4 = '#FBC78D'
const color5 = '#A7D676'

export default StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    title: {
        color: color1,
    },
    img: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    man: {
        width: 60,
        height: 60,
        marginTop: 260,
        marginLeft: 35
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    slider: {
        justifyContent: 'center',
    },
    header: {
        color: color1, 
        fontSize: 22
    },
    score: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})