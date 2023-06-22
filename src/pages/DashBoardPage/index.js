
import { Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, StyleSheet, Text, View , TouchableOpacity } from 'react-native';







export default function DashBoardPage(){

    return(
        <View style={styles.container}>
      <Text>KIT PROGAMADOR</Text>
      <Image
      style={styles.img}
      source={{
        uri: "data:image/jpeg;base64,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",
      }}
      />
      <Text>Poder de ataque:999999</Text>
      <Text>Poder de defesa:999999</Text>
      <Text>Tipo:neutro</Text>
      <Button 
      title="Propor troca"
      color="red"
      />
      <StatusBar style="auto" />
    </View>


    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5F9F9F',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    img: {
      width: 300,
      height: 300,
    },
  });