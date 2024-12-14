import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';

const App7 = () => {
  return (
    <View style={estilos.contenedor}>
      {/* Tarjeta de Bad Bunny */}
      <View style={estilos.tarjeta}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB1LmYoWHIv4NXBPeVPOGMj_dCXRVX-RGHzA0kxncLcBO6_YlBXjPeNohlHGD8Nx-CIQ&usqp=CAU' }} style={estilos.imagen} />
        <Text style={estilos.titulo}>Bad Bunny</Text>
        <Text style={estilos.subtitulo}>Artista de Reggaetón</Text>
        <Text style={estilos.descripcion}>
          Es un intérprete y compositor de música urbana puertorriqueño. Uno de los principales exponentes del panorama actual del reggaetón y trap.
        </Text>
        <View style={estilos.botones}>
          <Button
            title="Spotify"
            onPress={() => Linking.openURL('https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X')}
          />
          <Button
            title="Más Info"
            onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Bad_Bunny')}
          />
        </View>
      </View>

      {/* Tarjeta de Rosalía */}
      <View style={estilos.tarjeta}>
        <Image source={{ uri: 'https://phantom-elmundo.unidadeditorial.es/14e84df6324571ebf82f327ef631d999/resize/414/f/jpg/assets/multimedia/imagenes/2020/12/16/16081385853962.jpg' }} style={estilos.imagen} />
        <Text style={estilos.titulo}>Rosalía</Text>
        <Text style={estilos.subtitulo}>Artista de Pop y Flamenco</Text>
        <Text style={estilos.descripcion}>
          Cantante, compositora y productora española que ha revolucionado el flamenco fusionándolo con otros géneros contemporáneos.
        </Text>
        <View style={estilos.botones}>
          <Button
            title="Spotify"
            onPress={() => Linking.openURL('https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T')}
          />
          <Button
            title="Más Info"
            onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Rosal%C3%ADa_(cantante)')}
          />
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#f5f5f5' 
  },
  tarjeta: { 
    backgroundColor: '#fff', 
    marginBottom: 20, 
    padding: 15, 
    borderRadius: 10 
  },
  imagen: { 
    width: '100%', 
    height: 150, 
    borderRadius: 10 
  },
  titulo: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 5, 
    textAlign: 'center' 
  },
  subtitulo: { 
    fontSize: 16, 
    color: 'gray', 
    textAlign: 'center' 
  },
  descripcion: { 
    fontSize: 14, 
    marginVertical: 10, 
    textAlign: 'center' 
  },
  botones: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10 
  },
});

export default App7;
