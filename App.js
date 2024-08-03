import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import GroupList from './components/GroupList';
import AddGroup from './components/AddGroup';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Função para adicionar um novo grupo
  const addGroupHandler = (groupName) => {
    setGroups([...groups, { id: Math.random().toString(), name: groupName, todos: [] }]);
  };

  // Função para adicionar uma nova tarefa ao grupo selecionado
  const addTodoHandler = (text) => {
    if (selectedGroup) {
      const updatedGroups = groups.map((group) => {
        if (group.id === selectedGroup) {
          return {
            ...group,
            todos: [...group.todos, { key: Math.random().toString(), text }],
          };
        }
        return group;
      });
      setGroups(updatedGroups);
    }
  };

  // Função para deletar uma tarefa do grupo selecionado
  const deleteTodoHandler = (key) => {
    if (selectedGroup) {
      const updatedGroups = groups.map((group) => {
        if (group.id === selectedGroup) {
          return {
            ...group,
            todos: group.todos.filter((todo) => todo.key !== key),
          };
        }
        return group;
      });
      setGroups(updatedGroups);
    }
  };

  // Função para selecionar um grupo
  const selectGroupHandler = (groupId) => {
    setSelectedGroup(groupId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App com Agrupamentos</Text>
      <AddGroup onAddGroup={addGroupHandler} />
      <GroupList groups={groups} onSelectGroup={selectGroupHandler} selectedGroup={selectedGroup} />
      {selectedGroup && (
        <>
          <AddTodo onAddTodo={addTodoHandler} />
          <FlatList
            data={groups.find(group => group.id === selectedGroup).todos}
            renderItem={({ item }) => (
              <TodoItem item={item} onDelete={deleteTodoHandler} />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
