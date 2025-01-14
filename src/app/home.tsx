import { Link, Redirect, router, useLocalSearchParams } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"

export default function Home(){
      const {id} = useLocalSearchParams()

      if(!id){
            Alert.alert("Você não está logado （‵□′）")

            return <Redirect href="/" />
      }

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Home - {id}</Text>

                  <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.title}>Voltar</Text>
                  </TouchableOpacity>
            </View>
      )
}

const styles = StyleSheet.create({
      container: { flex: 1, gap: 80, justifyContent: "center", alignItems: "center", backgroundColor: "#111", color: "#FFF" },
      title: { fontSize: 22, fontWeight: 'bold', color: "#FFF" }
})