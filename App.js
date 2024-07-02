import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserProfileScreen from './src/screens/UserProfile';
import EditProfileScreen from './src/screens/EditProfileScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import CartScreen from './src/screens/Cart';
import CheckoutScreen from './src/screens/Checkout';
import SearchScreen from './src/screens/SearchScreen ';
import Location from './src/screens/Location';
import AddAddress from './src/screens/Address';
import Payment from './src/screens/Payment';
import OrderScreen from './src/screens/Order';
import MapScreen from './src/screens/map';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false,}}
      screenOptions={({ route }) => ({ headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconBgColor = focused ? 'green' : 'transparent'; // Green background when focused, transparent otherwise
          let iconColor = focused ? '#FFFFFF' : color; // White color when focused, original color otherwise

          if (route.name === 'Home') {
            iconName = 'home'; // Change icon name accordingly
          } else if (route.name === 'fav') {
            iconName = 'heart'; // Change icon name accordingly
          } else if (route.name === 'cart') {
            iconName = 'shopping-cart'; // Change icon name accordingly
          } else if (route.name === 'user') {
            iconName = 'user'; // Change icon name accordingly
          }
          // Add more conditions for additional tabs

          // You can return any component as your tab icon
          return (
            <Icon
              name={iconName}
              size={22}
              color={iconColor}
              style={{ backgroundColor: iconBgColor, borderRadius: 50, padding: 5 }}
            />
          );
        },
      })}
    >
      <Tab.Screen screenOptions={{headerShown: false}} name="Home" component={HomeScreen} />
      <Tab.Screen name="fav" component={WishlistScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
      <Tab.Screen name="user" component={UserProfileScreen} />
      {/* <Tab.Screen name="edit" component={EditProfileScreen} /> */}
      {/* Add more Tab.Screen components for additional screens */}
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="tab" component={MyTabs} />
        <Stack.Screen name="edit" component={EditProfileScreen} />
        <Stack.Screen name="check" component={CheckoutScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="location" component={Location} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="order" component={OrderScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
