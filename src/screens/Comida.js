
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Comida = () => {

  
    const colors = [
      { name: 'Arroz', image: require('../img/arroz.jpg') },
      { name: 'Burrito', image: require('../img/burrito.jpg') },
      { name: 'Carne', image: require('../img/carne.jpg') },
      { name: 'Hamburguesa', image: require('../img/hamburgusa.jpg') },
      { name: 'Pasta', image: require('../img/pasta.jpg') },
      { name: 'Pizza', image: require('../img/pizza.jpg') },
      
      { name: 'Sopa', image: require('../img/sopa.jpg') },
      { name: 'Tacos', image: require('../img/tacos.jpg') },

    ];


return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Comida</Text>
      <View style={styles.section}>
        {colors.slice(0, 8).map((color, index) => (
          <View key={index} style={styles.colorBox}>
            <Image style={styles.image} source={color.image} />
            <Text style={styles.colorName}>{color.name}</Text>
            <Text style={styles.colorCode}>{color.hex}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
        }

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
              padding: 10,
            },
            header: {
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            },
            section: {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            },
            colorBox: {
              width: '45%',
              backgroundColor: '#f0f0f0',
              borderRadius: 5,
              padding: 10,
              marginVertical: 10,
              alignItems: 'center',
            },
            image: {
              width: 100,
              height: 100,
            },
            colorName: {
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
            },
            colorCode: {
              fontSize: 14,
              color: '#7f8c8d',
            },
          });

          export default Comida;