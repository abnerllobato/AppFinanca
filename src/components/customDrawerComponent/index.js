import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomMenuDrawer = props => {
    return (
        <View style={{ flex: 1,}}>
            <DrawerContentScrollView {...props}  >
                <View style={styles.headerDrawer}  >
                    <Image
                        style={styles.imgProfile}
                        source={{ uri: 'https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg' }}
                    >
                    </Image>
                    <View style={{ flexDirection: 'column', paddingLeft: 7,}}  >
                        <Text>Usuario Da Silva</Text>
                        <Text>@User</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                <Text>Olaaaa</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    headerDrawer: {
        paddingTop: 20,
        paddingLeft: 31,
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

})

export default CustomMenuDrawer;