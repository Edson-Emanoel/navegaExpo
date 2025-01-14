import { router } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"

export default function SignUp(){

      function back(){
           if(!router.canGoBack()){
            return Alert.alert("Não é possível voltar!");
           }

           router.back();
      }

      return (
            <View style={styles.container}> 
                  <TouchableOpacity onPress={back}>
                        <Text style={styles.title}>
                              Voltar
                        </Text>
                  </TouchableOpacity>
            </View>
      )
}

const styles = StyleSheet.create({
      container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111" },
      title: { fontSize: 20, color: "#FFF" }
})