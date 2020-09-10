import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//TextInput allows user to enter text
//TouchableOpacity allows colour to fade away when you touch it
//stateless component
const InputBar = (props) => {
    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.input} 
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value = {props.todoInput} 
            />
            <TouchableOpacity style = {styles.addButton} onPress={props.addNewTodo}>
                <Text style = {styles.addButtonText}>ADD</Text> 
            </TouchableOpacity>
        </View>
    ) //note that ADD is assigned to styles.addButtonText
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {width: 0, height: 3},
        shadowColor: '#171717',
        shadowOpacity: .1
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#FFB6C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700'
    }
})

export default InputBar;