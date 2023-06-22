import { Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-web';


export default function ForgotPage(){

    return(

        <SafeAreaView style={styles.container}>
            <View>
                <TextInput style={styles.input}
                placeholder="Usuario"
                autocorrect={false}
                onChangeText={()=>{}}/>
            
                <TextInput style={styles.input}
                placeholder="Email"
                autocorrect={false}
                onChangeText={()=>{}}/>

                <TouchableOpacity style={styles.btnlogin}>
                    <Text>Recuperar senha</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Link to={{screen: "LoginPage"}} style={styles.btnlinks}>Voltar para tela de Login!</Link>
                </TouchableOpacity>
               
            </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5F9F9F',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',

    },

    input:{
        backgroundColor: 'white',
        with: '90%',
        marginBottom:16,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },

    btnlogin:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height : 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },

    btnlogintext:{
        color: 'white',
        fontSize: 18

    },

    btnlinks:{
        marginTop: 10,
        color:'white',

    }

    
  });