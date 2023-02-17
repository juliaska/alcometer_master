import {StyleSheet } from "react-native";

const Styles =  StyleSheet.create({

    text:{
        fontSize:17,
        height: 30,
        marginBottom: 5,
        marginTop: 20,
        fontWeight: 'bold',      
},

    textalcometer:{
        padding: 10,
        fontSize: 40,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: '#8c008c',
        fontFamily: 'PermanentMarker',
},

    radioStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-start',

},
    maleFemale: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 5,
        width: 60,
 },

    textInput:{
        width: 350,
        height: 40,
},

    button:{
        backgroundColor: '#ffc1ff',
        marginTop: 20,
        width: 350,
        borderRadius: 5,
},

    container: {
        paddingTop: 50,       
        paddingHorizontal: 15,
        height: 900,            
},

    switch:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 70,
},

    alcoholLevel: {
        fontSize:55,
        marginBottom: 50,
        marginTop: 20,
        textAlign:'center',
},       

});

export const DarkTheme = StyleSheet.create({
    ...Styles,
    container: {
        ...Styles.container,
        backgroundColor: '#ffbdff', 
        
    },
    textInput: {
        ...Styles.textInput,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'purple'
    },
    numericInput: {
        ...Styles.numericInput,
        color: 'white',
        borderColor: 'purple',
    },
    text: {
        ...Styles.text,
        color: 'purple'
    },
    button: {
        ...Styles.button,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: 'purple'
    },
});

export const LightTheme = StyleSheet.create({
    ...Styles, 
    container: { 
        ...Styles.container,
        backgroundColor: 'white',
        color: 'white',
    },
    textInput: {
        ...Styles.textInput,
        backgroundColor: '#ffbdff'
}, numericInput: {
        color: '#ffd7ff',
},
    });







