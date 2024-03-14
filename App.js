import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {

  const [speed, setSpeed] = useState(0)
  const [time, setTime] = useState(0)
  const [distance, setDistance] = useState(0);
  
  
  function calcOfDistance() {
    setDistance(speed * time)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.distance}>Distance Calculation</Text>
      

      <Text>Speed:</Text>
      <TextInput
      style={styles.input}
      placeholder="set your speed in KM"
      value={speed}
      placeholderTextColor='#999'
      onChangeText={(e) => setSpeed(e)}
      />

      <Text>Time</Text>
      <TextInput
      placeholder="set you time in hours"
      style={styles.input}
      value={time}
      placeholderTextColor='#999'
      onChangeText={(e) => setTime(e)}
      />

      <Button
        style={styles.button}
        title = 'efetuar login'
        onPress={()=>calcOfDistance()}
      />

      <Text style={styles.button}>Distance: {distance}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  distance: {
    paddingBottom:'20px'
  },
  button:{
    paddingTop:'20px'
  },
  input:{
    borderWidth:1,
  }
});
