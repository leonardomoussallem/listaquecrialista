import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const GroupList = ({ groups, onSelectGroup, selectedGroup }) => {
  return (
    <View style={styles.groupContainer}>
      <Text style={styles.groupHeader}>Grupos</Text>
      <FlatList
        data={groups}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.groupItem,
              item.id === selectedGroup ? styles.selectedGroup : null,
            ]}
            onPress={() => onSelectGroup(item.id)}
          >
            <Text style={styles.groupText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainer: {
    marginBottom: 20,
  },
  groupHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  groupItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  selectedGroup: {
    backgroundColor: '#80d8ff',
  },
  groupText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GroupList;
