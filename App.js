import 'react-native-gesture-handler';
import React from 'react';
import TodoPurchases from './components/TodoPurchases';
import TodoTasks from './components/TodoTasks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {  
  return (    
    <Button      
      title="Go to Jane's profile"      
      onPress={() =>        
      navigation.navigate('Profile', 
        { name: 'Jane' })      
      }    
    />  
  );
};

const ProfileScreen = ({ navigation, route }) => {  
  return <Text>This is {route.params.name}'s profile</Text>;
};

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
