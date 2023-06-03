import react from "react";
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { InitialPage } from "../pages/initialPage";
import { TransactionPage } from '../pages/transactionPage';
import { CardsPage } from "../pages/cardsPage";
import { Foundation, Octicons, Fontisto } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import CustomMenuDrawer from "../components/customDrawerComponent";


export const MenuDrawer = () => {

    const Drawer = createDrawerNavigator();
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return <Text>Carregando fonts</Text>
    } else

        return (
            <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomMenuDrawer {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#F2F4F8',
                    drawerLabelStyle: {
                        marginLeft: - 10,
                        fontFamily: 'Montserrat_400Regular',
                        fontSize: 18,
                        color: '#2B47FC',
                    }
                }} >
                <Drawer.Screen name="Resumo" component={InitialPage} options={{ drawerIcon: () => (<Foundation name="dollar" size={30} color='#2B47FC' />), }} />
                <Drawer.Screen name='Transações' component={TransactionPage} options={{ drawerIcon: () => (<Octicons name="arrow-switch" size={21} color='#2B47FC' />), }} />
                <Drawer.Screen name="Cartões" component={CardsPage} options={{ drawerIcon: () => (<Fontisto name="credit-card" size={16} color='#2B47FC' />), }} />
            </Drawer.Navigator>
        )

} 
