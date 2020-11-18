import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default function InputForm({ buttonClick }) {
    const [text, setText] = useState('');

    function changeHandler(val){
        setText(val);
    }

    function sendTodo(){
        buttonClick(text);
        setText('');
    }

    return (
        <View>
            <TextInput 
                value={text}
                style={styles.input} 
                onChangeText={changeHandler}
                placeholder='Add ToDo...'
            />
                <Button onPress={() => sendTodo()} color='coral' title='+'/>
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    }
})