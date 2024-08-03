import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
});

export default TodoItem;
