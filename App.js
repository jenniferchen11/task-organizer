import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native'; //These are called "core components"
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component { //App is a component (component names are preceded by "function" and they let you split the UI into independent, reusable pieces.) 
  //App is the parent function
  
  constructor (){
    super();

    this.state = { //initialing state
      todoInput: '',
      todos: [ //array to hold list
      //  { id: 0, title: 'Take out the trash!', green: false},
      //  { id: 1, title: 'Cook dinner', green: true}
      ]
    }
  }
 
  addNewTodo(){ //create reference copy of todos
    let todos = this.state.todos; //similar to what initializer method does in python

    todos.unshift({ //adds one or more items or elements to the beginning of the array
      id: todos.length + 1,
      title: this.state.todoInput,
      green: false
    });

    this.setState({
      todos, //updates todos
      todoInput: '' //makes input bar empty again
    });
  }  

  removeTodo(item) 
  {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== item.id); //removes todo item
    this.setState({todos});
  } 

  greenButton(item)
  {
    let todos = this.state.todos;
    todos = todos.map((todo) => {
      if (todo.id == item.id){
        todo.green = !todo.green;
      }
      return todo //maybe to ensure that prop is changed?
    })
    this.setState({todos});

  }

  render(){
    //next line checks which OS (? is shorthand if statement)
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View> /
    </View>; //line 95

    return ( 
      <View style={styles.container}>
        {statusbar}
        <Header title = "My Tasks"/> 
        
        <InputBar 
          addNewTodo={() => this.addNewTodo() }
          textChange={todoInput => this.setState({todoInput})} 
          todoInput={this.state.todoInput}
          />

          <FlatList 
          data={this.state.todos} //required prop
          extraData={this.state} 

          keyExtractor={(item, index) => index.toString()} //gives key of each item in the FlatList
          renderItem={ ({item, index}) => { //required prop
            return (
              <TodoItem 
                todoItem ={item}
                greenButton={() => this.greenButton(item)} 
                removeTodo={() => this.removeTodo(item)} 
              />
            )
          }}
          />
      </View> 
    );
  }  
}

const styles = StyleSheet.create({
  container: { //essentally the background
    //container is essentially a class; flex/backgroundColor are properties
    flex: 1, //tells a component to fill all available space, shared evenly amongst other components with the same parent
    backgroundColor: 'white', 
   
  },
  statusbar: { //very top showing time, battery, wifi strngth, etc.
    backgroundColor: 'white', //yellow
    height: 20
  }
});

