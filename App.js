import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const urlImagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20ogEMGwVXNsksBxm1kSwU9lnpobUPlrVJxfaa4AkVg&s"

  function calcular() {
    if(isNaN(peso) || isNaN(altura)) {
      alert("Insira um valor válido nos campos.")
      return
    }

    const valorCalculado = peso / Math.pow(altura, 2);
    setResultado(valorCalculado.toFixed(1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule o seu IMC</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Digite o seu peso (kg)'
      onChangeText={(valor) => setPeso(valor)}
      />
      <TextInput style={styles.input}
      placeholder='Digite a sua altura (m)'
      onChangeText={(valor) => setAltura(valor)}
      />

      <Button title='Calcular'
      color='#696969'
      onPress={calcular} />

      <Text style={styles.resultado}>O seu IMC é: {resultado}</Text>

      <Image 
      source={{uri:urlImagem}}
      style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    marginVertical: 30,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 25,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30
  },

  imagem: {
    marginTop: 30,
    alignSelf: 'center',
    width: 350,
    height: 400,
    resizeMode: 'contain'
  },

  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
