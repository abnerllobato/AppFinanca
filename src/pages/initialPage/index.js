import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export const InitialPage = ({navigation}) => {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Carregando Fonts</Text>;
  } else
    return (
      <View style={styles.container}>
        <LinearGradient colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']}
          style={styles.headerGradient}>
          <View style={styles.row1}>
            <TouchableOpacity onPress={() => navigation.openDrawer() } >
              <Feather name="menu" size={24} color="white"/>
            </TouchableOpacity>
            <Image
              style={styles.imgProfile}
              source={{ uri: 'https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg' }}
            >
            </Image>
          </View>
          <Text style={styles.txtWelcome}>Bem Vindo(a){'\n'}Usuario,</Text>
        </LinearGradient>
        <View style={{ width: '100%', alignItems: 'center' }} >
          <View style={styles.ResumoSaldo} >
            <Text style={{ color: '#3A3A3A', fontFamily: 'Montserrat_400Regular', fontSize: 16, }} >Seu saldo total</Text>
            <Text style={{ color: '#2D99FF', fontFamily: 'Montserrat_700Bold', fontSize: 30, }} >R$ 8.500,00</Text>
          </View>
          <View style={styles.VerifyCount}>
            <LinearGradient colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']}
              style={styles.Account}
            >
              <Text style={{ color: 'white', fontFamily: 'Montserrat_400Regular', fontSize: 19, }} >Verifique Suas Contas Bancárias</Text>
              <AntDesign name="arrowright" size={20} color="white" />
            </LinearGradient>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },
  headerGradient: {
    width: '100%',
    height: '38%',
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  txtWelcome: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Montserrat_400Regular',
    marginLeft: 50,
  },
  ResumoSaldo: {
    backgroundColor: '#fff',
    width: '80%',
    height: '50%',
    top: -40,
    borderRadius: 30,
    padding: 20,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  VerifyCount: {
    width: '80%',
    height: '23%',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  Account: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
});

