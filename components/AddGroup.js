import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddGroup = ({ onAddGroup }) => {
  const [groupName, setGroupName] = useState('');

  const handleChange = (value) => {
    setGroupName(value);
  };

  const handleSubmit = () => {
    if (groupName.length > 0) {
      onAddGroup(groupName);
      setGroupName('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo agrupamento..."
        value={groupName}
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

export default AddGroup;
