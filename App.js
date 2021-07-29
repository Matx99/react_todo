import 'react-native-gesture-handler';
import React from 'react';
import TodoPurchases from './components/TodoPurchases';
import TodoTasks from './components/TodoTasks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer> 
      <Stack.Navigator>        
        <Stack.Screen          
          name="Purchases"          
          component={TodoPurchases}          
          options={{ title: 'Achats' }}        
        />        
        <Stack.Screen 
          name="Tasks" 
          component={TodoTasks} 
          options={{ title: 'Tâches' }}        
        />      
      </Stack.Navigator>    
      {/* <TodoPurchases /> */}
    </NavigationContainer>
  );
};

export default App;
