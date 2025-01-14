import { Link, router } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function Index(){
      function signUp(){
            router.navigate("/sign-up")
      }

      return (
            <View style={styles.container}>
                  <TouchableOpacity style={styles.button} onPress={signUp}>
                        <Text style={styles.label}>Criar Conta</Text>
                  </TouchableOpacity>

                  <View style={styles.container2}>
                        <Link style={styles.label2} href={{ pathname: "/home"}}>Ir para a pagina Home</Link>

                        <Link style={styles.label2} href="/product/7">Abrir Produto</Link>
                  </View>
            </View>
      )
}

const styles = StyleSheet.create({
      container: { flex: 1, gap: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#111" },
      container2: { gap: 10, justifyContent: "center", alignItems: "center"},
      label: { fontSize: 22, fontWeight: 'bold', color: "#FFF" },
      label2: { fontSize: 16, fontWeight: 'bold', color: "#FFF", backgroundColor: "#323232", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 4 },
      button: { backgroundColor: "#242424", paddingHorizontal: 32, paddingVertical: 10, borderRadius: 10 }
})