import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; //These three are called "core components"
//creating stateless component
const Header = (props) => { //props are things that are passed through from the parents
    return (
        <View style = {styles.header}>
            <Text style={styles.title}>{ props.title }</Text> 
        </View>
    ) //props.title is passed through from App.js
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fef3bd',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
});

export default Header;//allows us to access Header in App.js