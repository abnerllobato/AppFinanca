import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export const TransactionPage = () => {

    const [text, onChangeText] = React.useState('Procurar');

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Carregando Fontes</Text>;
    } else
        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    <View style={styles.headerTop} >
                        <AntDesign style={{ paddingRight: 100, }} name="arrowleft" size={26} color="white" />
                        <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 15 }} >Transações</Text>
                    </View>
                    <View style={styles.resumeExpense} >
                        <Text style={{ fontFamily: 'Montserrat_400regular', color: '#87F0FF', fontSize: 22 }} >Suas despesas totais</Text>
                        <Text style={{ fontFamily: 'Montserrat_700Bold', color: 'white', fontSize: 28, paddingTop: 5 }} >R$ 1.063,30S</Text>
                    </View>
                </View>
                <View style={styles.details} >
                    <TextInput
                        left={<TextInput.Icon icon='magnify' iconColor='#3D56FA' />}
                        textColor='#3D56FA'
                        placeholder="Procurar"
                        placeholderTextColor='#3D56FA'
                        

                        value={text} onChangeText={onChangeText}
                        style={styles.textInput} />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#3650FC',
        height: '40%',
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 20,

        borderBottomColor: '#87F0FF',
        borderBottomWidth: 2,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    resumeExpense: {
        paddingTop: 70,
        alignItems: 'center'
    },
    details: {
        backgroundColor: '#3650FC',
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        margin: 30,
        alignItems: 'center',
    },
    textInput: {
        marginTop: 40,
        height: 53,
        width: '80%',
        backgroundColor: '#05199E',
        color: 'white',
    }
});