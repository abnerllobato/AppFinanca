import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather} from '@expo/vector-icons';
import { Text } from 'react-native';
import { MainStackNavigator, TransactionStackNavigator, CardsStackNavigator } from './stackNavigator';

export const MenuTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                borderTopColor: 'transparent',
                backgroundColor: '#f7f7f7',
                height: 50
            },
            tabBarShowLabel: false,
            headerShown: false,
            
            
        }} >
            <Tab.Screen name='ola' component={MainStackNavigator} options={{ tabBarIcon: ({size, color}) => ( <Ionicons name="ios-wallet-outline" size={size} color={color} />)}} />
            <Tab.Screen name='Sino' component={TransactionStackNavigator} options={{ tabBarIcon: ({size, color}) => ( <Feather name="bell" size={size} color={color} />)}} />
            <Tab.Screen name='Pessoa' component={CardsStackNavigator} options={{ tabBarIcon: ({size, color}) => ( <Ionicons name="person-outline" size={size} color={color} />)}} />
        </Tab.Navigator>
    );
}