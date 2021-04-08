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
    input: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        textAlignVertical: 'top'
    },
    slider: {
        justifyContent: 'center',
        color: color3,
        tintColor: color1,
    },
    header: {
        color: color1, 
        fontSize: 22
    },
    score: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        color: color4,
    },
    smile: {
        width: '100%',
        height: '30%',
        resizeMode: 'contain',
        padding: 0
    }
})