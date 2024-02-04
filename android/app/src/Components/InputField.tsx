import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

export default function InputField() {
  const [inputValue, setInputValue] = useState<string[]>([]);
  const [displayedValue, setDisplayedValue] = useState('');

  function inputChangeHandler(text: string) {
    if (text.length <= 40) {
      setDisplayedValue(text);
    }
  }

  function handleButtonPress() {
    if (displayedValue.trim() !== '') {
      setInputValue([...inputValue, displayedValue]);
      setDisplayedValue('');
    }
  }

  function handleDelete(index: number) {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedTasks = [...inputValue];
            updatedTasks.splice(index, 1);
            setInputValue(updatedTasks);
          },
        },
      ],
    );
  }

  const renderItem = ({item, index}: {item: string; index: number}) => (
    <View style={styles.taskContainer}>
      <Text style={styles.displayedText}>{item}</Text>
      <TouchableOpacity
        onPress={() => handleDelete(index)}
        style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Todo Text"
        onChangeText={inputChangeHandler}
        value={displayedValue}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={inputValue}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 5,
    marginTop: 20,
    paddingHorizontal: 16,
    width: '75%',
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  displayedText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
