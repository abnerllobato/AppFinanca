import react from "react";
import { View, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { InitialPage } from "../pages/initialPage";
import { TransactionPage } from '../pages/transactionPage';
import { CardsPage } from "../pages/cardsPage";

import CustomMenuDrawer from "../components/customDrawerComponent";


export const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator  useLegacyImplementation drawerContent={(props) => <CustomMenuDrawer {...props}/>} 
         screenOptions={{ headerShown: false, }} >
            <Drawer.Screen name="Resumo" component={InitialPage} />
            <Drawer.Screen name='Transações' component={TransactionPage} />
            <Drawer.Screen name="Cartões" component={CardsPage}/>
        </Drawer.Navigator>
    )

} 