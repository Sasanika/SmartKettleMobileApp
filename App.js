import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { ref, set, onValue, remove, update } from "firebase/database";
import { db } from './components/config';

export default function App() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  function create (){
    set(ref(db, 'users/' + username), {
      username: username,
      email: email
    }).then(()=>{
      alert('data submitted successfully');
    })
      .catch((error)=>{
        alert(error);
      });
  }

  function updateData (){
    update(ref(db, 'users/' + username), {
      username: username,
      email: email
    }).then(()=>{
      alert('data updated successfully');
    })
      .catch((error)=>{
        alert(error);
      });
  }

  function readData (){
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setEmail(data.email);
});
  }

  function deleteData (){
    remove(ref(db, 'users/' + username));
    alert('Removed');
  }

 

  return (
    <View style={styles.container}>
      <Text>Firebase Crud</Text>
      
      <TextInput value={username} onChangeText={(username) => {setUsername(username)}} placeholder="Username" style={styles.textBoxes}></TextInput> 
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>

      <Button
        onPress={create}
        title="Create Data"
        color="#841584"
/>

<Button
        onPress={updateData}
        title="Update Data"
        color="#841584"
/>

<Button
        onPress={readData}
        title="Read Data"
        color="#841584"
/>

<Button
        onPress={deleteData}
        title="Delete Data"
        color="#841584"
/>


      

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

  textBoxes:{
    width: 200,
    fontSize: 20,
    padding:12,
    borderColor:'gray',
    borderWidth:2,
    borderRadius: 10,
    margin:8,
    

  }
});
