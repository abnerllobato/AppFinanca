import { createStackNavigator } from '@react-navigation/stack';

import { InitialPage } from '../pages/initialPage';
import { TransactionPage } from '../pages/transactionPage';
import { CardsPage } from '../pages/cardsPage';

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerShown: false,
}


const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Resumo' component={InitialPage}/>
        </Stack.Navigator>
    );
}

const TransactionStackNavigator = () =>{
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Transação' component={TransactionPage}/>
        </Stack.Navigator>
    );
}

const CardsStackNavigator = () =>{
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Cartões' component={CardsPage}/>
        </Stack.Navigator>
    );
}

export {MainStackNavigator, TransactionStackNavigator, CardsStackNavigator};