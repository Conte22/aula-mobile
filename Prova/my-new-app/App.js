import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.cabecalho}>
        <View style={styles.redondo} />
        <View>
          <Text style={styles.titulo}>React Native</Text>
          <Text style={styles.subtitulo}>Avaliação dia 04/09/26</Text>
        </View>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.cartao}>
          <Text style={styles.textoCartao}>Batatas são macias.</Text>
        </View>
        
        <TouchableOpacity style={styles.botao} activeOpacity={0.8}>
          <Text style={styles.textoBotao}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F7',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  redondo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1E56F0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    color: '#8A8A8A',
    marginTop: 2,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  cartao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
  },
  textoCartao: {
    fontSize: 16,
    color: '#333',
  },
  botao: {
    backgroundColor: '#1E56F0',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});