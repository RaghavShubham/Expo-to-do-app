import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, handlePress }) {
    return(
        <TouchableOpacity onPress={() => handlePress(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={24} color="darkblue" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: 'cyan'
    },
    itemText: {
        marginLeft: 12,
    }
})