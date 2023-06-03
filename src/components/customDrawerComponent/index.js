import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons';

const CustomMenuDrawer = props => {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Carregando Fontes</Text>
    } else


        return (
            <View style={{ flex: 1,}}>
                <DrawerContentScrollView {...props}  >
                    <View style={styles.headerDrawer}  >
                        <Image
                            style={styles.imgProfile}
                            source={{ uri: 'https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg' }}
                        >
                        </Image>
                        <View style={{ flexDirection: 'column', paddingLeft: 7, }}  >
                            <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: 16 }} >Usuario Da Silva</Text>
                            <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 14, }} >@User</Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 10 }} >
                        <DrawerItemList {...props} />
                    </View>
                </DrawerContentScrollView>
                <View style={{ paddingBottom: 64, paddingHorizontal: 30, }}>
                    <TouchableOpacity style={styles.customButton} >
                        <Text style={{ paddingRight: 120, color: '#2743FD', fontFamily:'Montserrat_400Regular', fontSize: 20 }} >Sair</Text>
                        <Ionicons name="ios-exit-outline" size={26} color="#2743FD" />
                    </TouchableOpacity>
                </View>
            </View>
        )

}

const styles = StyleSheet.create({
    headerDrawer: {
        paddingTop: 20,
        paddingLeft: 21,
        paddingBottom: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 18,
    },
    customButton: {
        flexDirection: 'row',
        height: 65,
        width: '100%',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#2743FD',
    }

})

export default CustomMenuDrawer;