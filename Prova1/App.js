import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.cabecalho1}>
        <View style={styles.circuloFoto} />
        <View>
          <Text style={styles.textTitulo}>React Native</Text>
          <Text style={styles.textSubtitulo}>Avaliação dia 04/09/2026</Text>
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
    paddingHorizontal: 30,
    paddingTop: 70,
  },
  cabecalho1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 36,
    marginBottom: 50,
  },
  circuloFoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5481fc',
  },
  textTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textSubtitulo: {
    fontSize: 14,
    color: '#8A8A8A',
    marginTop: 2,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  cartao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  textoCartao: {
    fontSize: 20,
    color: '#333',
  },
  botao: {
    backgroundColor: '#5481fc',
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