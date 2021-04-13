import { StyleSheet } from 'react-native';

const color1 = '#85CBCC' // darker blue
const color2 = '#A8DEE0' // light blue
const color3 = '#F9E2AE' // light orange
const color4 = '#FBC78D' // orange
const color5 = '#A7D676' // green

export default StyleSheet.create({
    container: {
        backgroundColor: color1,
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
        color: color5,
    },
    smile: {
        width: '100%',
        height: '30%',
        resizeMode: 'contain',
        padding: 0
    },
    darkContainer:{
        flex: 1,
        backgroundColor: "#000",
    },
    bigButton: {
        width: "40%",
        height: "25%",
        backgroundColor: "#779FE7",
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1,
        marginHorizontal: "5%",
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextStyle: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        marginVertical: 20,
    },
})