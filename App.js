import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import MyCourse from './screen/myCourse';
import CourseDetail from './screen/courseDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyCourses"
          component={MyCourse}
          options={{
            headerStyle: {
              elevation: 0,
            },
            title: 'My courses',
            headerTitleStyle:{
                fontWeight:'700',
                color:'#2d2d2d',
                fontSize:18          },
            headerLeft: () => {
              return(
                 <TouchableOpacity style={{ marginLeft: 10 }}>
                  <Icon name='arrow-left' size={25} />
                </TouchableOpacity>
              )
            }
          }}
        />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}