import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Marquee } from '@animatereactnative/marquee';
import data from "./data.json";

const RowOfSliderComponents = ({ selectedLanguage }) => {
  return (
    <Marquee speed={1}>
      <View style={styles.container}>
        {data.images.map((item, index) => (
          <SliderComponent
            key={index}
            text={item.translations[selectedLanguage]?.text}
            price={item.translations[selectedLanguage]?.price}
            imagePath={item.path}
          />
        ))}
      </View>
    </Marquee>
  );
};

const SliderComponent = ({ text, price, imagePath }) => {
  return (
    <View style={styles.componentContainer}>
      <Image
        source={{ uri: imagePath }}
        style={styles.image} 
        onError={(error) => console.error("Image loading error:", error)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  componentContainer: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    width: 156,
    height: 156,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RowOfSliderComponents;
