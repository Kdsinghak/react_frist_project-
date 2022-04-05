import React from 'react';

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  console.log(navigation);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text onPress={() => navigation.navigate('Details')}>
        Click to go Details
      </Text>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text
        onPress={() => {
          navigation.navigate('services');
        }}>
        Click to go Services
      </Text>
    </View>
  );
}

function Services({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <Text
        onPress={() => {
          navigation.navigate('Home');
        }}>
        Click to go Home Screen
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
console.log(Stack);
function App() {
  const {Navigator, Screen} = Stack;
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Details'}}
        />
        <Screen
          name="services"
          component={Services}
          options={{title: 'Services'}}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
