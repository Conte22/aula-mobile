import { StatusBar } from 'expo-status-bar';
import { Pressable ,Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Boa Noite !</Text>
      <Button
      title="Clique se quiser"
      color="#00570c"
      accessibilityLabel="Clique se quiser"
      />
      <TextInput placeholder="Teste" />
      <StatusBar style="auto" />
      <Pressable onPress={onPressFunction}>
      <Text>I'm pressable!</Text>
      </Pressable>
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
