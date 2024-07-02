import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import data from "./data.json";

const FeaturedComponent = ({ selectedLanguage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.featuredHeading}>Featured Beverages</Text>
      {data.featured.images.map(item => (
        <FeaturedItem
          key={item.id}
          imageSource={{ uri: item.path }}
          heading={item.translations[selectedLanguage].text}
          details={item.translations[selectedLanguage].price}
        />
      ))}
    </View>
  );
};

const FeaturedItem = ({ imageSource, heading, details }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  featuredHeading: {
    fontSize: 25,
    paddingHorizontal: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "black",
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: 'grey',
    fontWeight: "bold"
  },
});

export default FeaturedComponent;
