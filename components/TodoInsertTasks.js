import React from 'react';
import {Button, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';


const TodoInsertTasks = ({onAddTodo}) => {
  
  const [newTodoItem, setNewTodoItem] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  // Geolocation.setRNConfiguration(config); 

  const getGeo = () => {
    Geolocation.getCurrentPosition(info => console.log(info));
  };

  const getDate = (x) => {
    // const formattedDate = format(selectedDate, "yyyy-LL-dd");
    // onDateChange={date => { setDate(new Date(date)) }}
    // getDateStr={date => format(new Date(date), "d MMMM yyyy")}
    console.log(x);
    return x;
  }

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  var onChange = (event, selectedDate) => {
    var currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    global.finalDate = currentDate;
    // getDate(test);
  };

  const addTodoHandler = (finalDate) => {  
    var dateM = format(date, "d MMMM yyyy")
    onAddTodo(newTodoItem + " " + dateM);
    // onAddTodo(getDate());
    setNewTodoItem('');
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ajouter un item"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        {/* <Button onPress={showDatepicker} title="Date" /> */}
        <TouchableOpacity onPressOut={showDatepicker}>
          <View>
            <Icon name="calendar" size={30} color="#3143e8" />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPressOut={getGeo}>
          <View>
            <Icon name="map-pin" size={30} color="#3143e8" />
          </View>
        </TouchableOpacity> */}
        <Button title={'GPS'} onPress={getGeo} />
        <Button title={'+'} onPress={addTodoHandler} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsertTasks;