import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.head}>
            <Text style={styles.title}>ToDo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: "coral",
        height: 80,
        paddingTop: 26,
        width: '100%' ,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})