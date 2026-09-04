import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.usuarioInfo}>
          <View style={styles.fotoPerfil} />
          <View>
            <Text style={styles.nomeUsuario}>Olá, Estudante</Text>
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
});
