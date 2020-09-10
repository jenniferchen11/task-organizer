import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class TodoItem extends React.Component { //creating stateful function
    constructor (props) {
        super(props);
    }

    render () {
        const todoItem = this.props.todoItem;

        return (
            <View>
                <TouchableOpacity //circular button
                    style = {(todoItem.green) ? styles.green : styles.blank}
                    onPress={() => this.props.greenButton()}>
                </TouchableOpacity>
        
                <TouchableOpacity //todos
                    style = {styles.todoItem}
                    >
                    <Text style = {(todoItem.done) ? { color: '#AAAAAA'} : {color: '#313131'}}>
                        { todoItem.title }
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity //Done button
                    style = {styles.doneButton}
                    onPress={() =>this.props.removeTodo()}
                    >
                    <Text style = {styles.doneText}>
                        {'Delete'}
                    </Text>
                </TouchableOpacity>
            </View>
    )}
}

const styles = StyleSheet.create({
    green:{
        justifyContent: 'space-between',
        margin: 5,
        height: 30,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: '#a2ef93',
        width: 30,
        borderRadius: 60,
        //position: 'absolute',
        left: 5,
    },
    blank:{
        justifyContent: 'space-between',
        margin: 5,
        height: 30,
        borderWidth: 3,
        borderColor: 'gray',
        width: 30,
        borderRadius: 60,
        //position: 'absolute',
        left: 5,
    },
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        position: 'absolute',
        left: 50,
        paddingTop: 10,
    },
    doneButton:{
        position: 'absolute',
        left: 310,
        paddingTop: 10
    },
    doneText:{
        color: 'red'
    }
})