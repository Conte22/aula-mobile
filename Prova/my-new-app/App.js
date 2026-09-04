import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.titulo}>
          <View style={styles.redondo} />
          <View>
            <Text style={styles.texto}>React Native</Text>
            <Text style={styles.subtitulo}>Avaliação dia 04/09/2026
            
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 45,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  redondo: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#c4b5fd',
  },
  nomesubtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    color: '#888',
  },
});
