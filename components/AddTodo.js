import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  const handleSubmit = () => {
    if (text.length > 0) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar tarefa..."
        value={text}
        onChangeText={handleChange}
      />
      <Button title="Adicionar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default AddTodo;
