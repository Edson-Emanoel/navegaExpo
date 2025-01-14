import { router, useLocalSearchParams } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function Product(){
      const { id } = useLocalSearchParams();

      return (
            <View style={styles.container}>
                  <Text style={styles.label}>ID do Produto: {id} </Text>

                  <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.label2}>Voltar</Text>
                  </TouchableOpacity>
            </View>
      )
}

const styles = StyleSheet.create({
      container: { flex: 1, gap: 80, justifyContent: "center", alignItems: "center", backgroundColor: "#111", color: "#FFF" },
      label: { fontSize: 22, fontWeight: 'bold', color: "#FFF" },
      label2: { fontSize: 14, fontWeight: 'bold', color: "#FFF" }
})