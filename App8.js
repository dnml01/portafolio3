import React from 'react'; 
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import { Card, Paragraph, Button, Avatar, Provider as PaperProvider } from 'react-native-paper';

const App8 = () => {
  const IconoIzquierdo = (props) => <Avatar.Icon {...props} icon="music" />;

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={estilos.scrollContainer}>
        <View style={estilos.contenedor}>
          {/* Tarjeta de Bad Bunny */}
          <Card style={estilos.tarjeta}>
            <Card.Title
              title="Bad Bunny"
              subtitle="Artista de Reggaetón"
              left={IconoIzquierdo}
              titleStyle={{ textAlign: 'center' }}
              subtitleStyle={{ textAlign: 'center' }}
            />
            <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB1LmYoWHIv4NXBPeVPOGMj_dCXRVX-RGHzA0kxncLcBO6_YlBXjPeNohlHGD8Nx-CIQ&usqp=CAU' }} />
            <Card.Content>
              <Paragraph style={{ textAlign: 'center' }}>
                Es un intérprete y compositor de música urbana puertorriqueño. Uno de los principales exponentes del panorama actual del reggaetón y trap.
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => Linking.openURL('https://open.spotify.com/intl-es/artist/4q3ewBCX7sLwd24euuV69X?si=LBqUC2BSRxKpEBE9xYkerw')}>Spotify</Button>
              <Button onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Bad_Bunny')}>Más Info</Button>
            </Card.Actions>
          </Card>

          {/* Tarjeta de Rosalía */}
          <Card style={estilos.tarjeta}>
            <Card.Title
              title="Rosalía"
              subtitle="Artista de Pop y Flamenco"
              left={IconoIzquierdo}
              titleStyle={{ textAlign: 'center' }}
              subtitleStyle={{ textAlign: 'center' }}
            />
            <Card.Cover source={{ uri: 'https://phantom-elmundo.unidadeditorial.es/14e84df6324571ebf82f327ef631d999/resize/414/f/jpg/assets/multimedia/imagenes/2020/12/16/16081385853962.jpg' }} />
            <Card.Content>
              <Paragraph style={{ textAlign: 'center' }}>
                Cantante, compositora y productora española que ha revolucionado el flamenco fusionándolo con otros géneros contemporáneos.
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => Linking.openURL('https://open.spotify.com/intl-es/artist/7ltDVBr6mKbRvohxheJ9h1?si=tOygYuONQGe2Hd1IeZrSHQ')}>Spotify</Button>
              <Button onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Rosal%C3%ADa_(cantante)')}>Más Info</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  contenedor: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#f5f5f5' 
  },
  tarjeta: { 
    marginBottom: 20 
  },
});

export default App8;
