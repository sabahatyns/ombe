import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import data from './data.json'; // Import your JSON data here

const Category = ({ iconName, category, selectedLanguage }) => {
  const translatedTitle = category.translations[selectedLanguage].text;
  const translatedDetails = category.translations[selectedLanguage].price;

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={iconName} size={24} color="green" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{translatedTitle}</Text>
        <Text style={styles.details}>{translatedDetails}</Text>
      </View>
    </View>
  );
};

const CategoryComponent = ({ selectedLanguage }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {data.images.map((category, index) => (
            <Category
              key={index}
              iconName="fastfood" // Assuming a default icon for categories
              category={category}
              selectedLanguage={selectedLanguage}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
  },
  heading: {
    fontSize: 25,
    paddingHorizontal: 25,
    fontWeight: "bold",
    marginTop: 20,
    color: "black"
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 23
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: "green"
  },
});

export default CategoryComponent;
