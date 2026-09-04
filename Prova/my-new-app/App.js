import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.cabecalho}>
        <View style={styles.redondo} />
        <View style={styles.Cabecalho}>
          <Text style={styles.Titulo}>React Native</Text>
          <Text style={styles.subtitulo}>Avaliação dia 04/09/26</Text>
        </View>
      </View>

      <View style={styles.espacoTela}>
        
        <View style={styles.cartao}>
          <Text style={styles.textoCartao}>Batatas são macias.</Text>
        </View>

        <TouchableOpacity style={styles.botao} activeOpacity={0}>
          <Text style={styles.textoBotao}>ENVIAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6dbfa', 
    paddingHorizontal: 20,     
    paddingTop: 50,           
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',       
    gap: 16,                    
    marginBottom: 20,           
  },
  Titulo: {
    fontSize: 22,
    fontWeight: 'bold',         
    color: '#000',
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
