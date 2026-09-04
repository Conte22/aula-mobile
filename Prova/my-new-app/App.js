import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.usuarioInfo}>
          <View style={styles.fotoPerfil} />
          <View>
            <Text style={styles.texto}>Olá, Estudante</Text>
            <Text style={styles.subtitulo}>Sua musica do dia</Text>
          </View>
        </View>
        <View style={styles.iconeEngrenagem}>
          <Text style={
            { color: '#fff', fontWeight: 'bold' }
            }>⚙</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  usuarioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fotoPerfil: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#c4b5fd',
  },
  nomeUsuario: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    color: '#888',
  },
});
