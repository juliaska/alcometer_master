import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import {Provider, RadioButton, Text, TextInput, Button, Switch } from 'react-native-paper';
import Styles, {LightTheme, DarkTheme}  from './styles/Styles';
import {useFonts} from 'expo-font';


function calculateAlc(alcoholConsumed, weight, gender, timeElapsed) {
    let litres = alcoholConsumed * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * timeElapsed;
    let result = 0;
    if (gender === "male") {
        result = gramsLeft / (weight * 0.7);
    } else {
        result = gramsLeft / (weight * 0.6);
    }
    return result >= 0 ? result : 0;

  } 

function App() {
  const [alcoholConsumed, setAlcoholConsumed] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [alc, setAlc] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [error, setError] = useState(false);

  const [loaded] = useFonts({
    PermanentMarker: require('./fonts/PermanentMarker-Regular.ttf'),
  });

  if(!loaded) {
    return null;
  }

  const myStyle = isDark ? DarkTheme : LightTheme;
  

  function handleSubmit() {
    if (!weight) {
      setError(true);
      Alert.alert('Error', 'Please enter weight');
      return;
    }
    setError(false);
    const calculatedAlc = calculateAlc(alcoholConsumed, weight, gender, timeElapsed);
    setAlc(calculatedAlc);
  };

  let color = "green";
  if (alc >= 0.5 && alc < 1) {
    color = "#f4eb2f";
  } else if (alc >= 1) {
    color = "red";
  }

  return (
  <ScrollView>
     <View style = {myStyle.container}>
        <Switch
              style={myStyle.switch}
              value={isDark}
              onValueChange={()=>setIsDark(!isDark)}
         />
        <StatusBar style = {isDark ? 'dark' : 'dark'}/>
      <Text style={myStyle.textalcometer} >Alcometer </Text>
      
      <Text style={myStyle.text}>Bottles:</Text>
      <NumericInput 
        onChange={(alcoholConsumed) => setAlcoholConsumed(alcoholConsumed)} 
        minValue={0}
        keyboardType='numeric' 
        value={alcoholConsumed} 
        rightButtonBackgroundColor={myStyle.numericInput.color}
        leftButtonBackgroundColor={myStyle.numericInput.color}
        borderColor= {myStyle.numericInput.borderColor}
      />

      <Text style={myStyle.text}>Weight:</Text>
      <TextInput style={myStyle.textInput}
        keyboardType='numeric' 
        value={weight} 
        onChangeText={(weight) => setWeight(weight)} 
      />
      <Text style={myStyle.text}>Gender:</Text>
      <RadioButton.Group
        onValueChange={(gender) => setGender(gender)}
        value={gender}>
      <View style = {myStyle.radioStyle}>
        <RadioButton value="male" />
        <Text style = {myStyle.maleFemale}> Male</Text>
        <RadioButton style={myStyle.radioStyle} value="female" />
        <Text style = {myStyle.maleFemale}> Female </Text>
      </View>
      </RadioButton.Group>

      <Text style={myStyle.text}>Hours:</Text>
      <NumericInput 
        keyboardType='numeric' 
        value={timeElapsed} 
        onChange={(timeElapsed) => setTimeElapsed(timeElapsed)} 
        minValue={0}
        rightButtonBackgroundColor={myStyle.numericInput.color}
        leftButtonBackgroundColor={myStyle.numericInput.color}
        borderColor= {myStyle.numericInput.borderColor}
      />
      <Button style = {myStyle.button} onPress={handleSubmit}>
        <Text>Calculate</Text> 
      </Button>
      <Text style={[myStyle.alcoholLevel, {color}]}>{alc.toFixed(2)}</Text>
    </View>
  </ScrollView>
  );
}

export default App;
