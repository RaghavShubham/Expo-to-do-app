import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import InputForm from './components/inputForm';

export default function App() {

  const [todo, setTodo] = useState([
    {text: "kaam Karle Kuch to", key: '1'},
    {text: "nalayak kahinka", key: '2'}
  ]);

  const handlePress = (key) => {
    setTodo((prevtodo) => {
      return prevtodo.filter((item) => item.key != key)
    })
  }

  const buttonClick = (text) => {
    if (text.length > 1){
      setTodo((prevtodo) => {
        return [{text: text , key: Math.random().toString()},
         ...prevtodo];
       })
    }
    else{
      Alert.alert( 'OOPS!', 'Please write something before adding', [
        {text: 'Ok', onPress: () => {console.log('added')}}
      ])
    }
  
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <Header />
          <View style={styles.content}>
            <InputForm buttonClick={buttonClick} />
            <View style={styles.list}>
              <FlatList 
                data = {todo}
                renderItem = { ({ item }) => (
                  <TodoItem  item={item} handlePress={handlePress}/>           
                )}
              />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
