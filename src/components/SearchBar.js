// SearchBar.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from './data.json'; // Import JSON data here
import FeaturedComponent from './Featured';
import CategoryComponent from './Categories';
import RowOfSliderComponents from './Slider';

const SearchBar = ({ selectedLanguage, onLanguageChange }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Placeholder text for search input based on selected language
  const placeholderTexts = {
    English: 'Search beverages and foods',
    French: 'Recherche de boissons et de nourriture',
    Spanish: 'Buscar bebidas y alimentos',
    Urdu: 'بیوریجز اور کھانے کی تلاش',
    // Add more languages as needed
  };

  // Function to filter data based on search text
  const filterData = (text) => {
    const filtered = data.images.filter(item =>
      item.translations[selectedLanguage].text.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.path }} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.translations[selectedLanguage].text}</Text>
        <Text style={styles.itemPrice}>{item.translations[selectedLanguage].price}</Text>
      </View>
    </TouchableOpacity>
  );

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Function to handle language selection
  const switchLanguage = (lang) => {
    onLanguageChange(lang); // Notify parent component about language change
    setModalVisible(false);
    filterData(searchText); // Re-filter data based on the selected language
  };

  // Function to handle opening the language modal
  const openLanguageModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholderTexts[selectedLanguage]} // Dynamic placeholder based on selected language
            placeholderTextColor="grey"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              filterData(text);
            }}
          />
          <Icon name="search" size={scale(20)} color="grey" style={styles.searchIcon} />
        </View>
        <View style={{ margin: 6 }}>
          <TouchableOpacity onPress={openLanguageModal}>
            <Icon name="globe" size={scale(20)} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      {(searchText === '') && (
        <>
          <RowOfSliderComponents selectedLanguage={selectedLanguage} />
          <CategoryComponent selectedLanguage={selectedLanguage} />
          <FeaturedComponent selectedLanguage={selectedLanguage} />
        </>
      )}
      {(searchText !== '') && (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => switchLanguage('English')}>
              <Text style={styles.languageOption}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => switchLanguage('French')}>
              <Text style={styles.languageOption}>French</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => switchLanguage('Spanish')}>
              <Text style={styles.languageOption}>Spanish</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => switchLanguage('Urdu')}>
              <Text style={styles.languageOption}>Urdu</Text>
            </TouchableOpacity>
            {/* Add more language options as needed */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: "center",
    justifyContent: 'space-between',
    padding: scale(5),
    backgroundColor: '#e5e5e5',
    borderRadius: scale(50),
    paddingHorizontal: scale(20),
  },
  input: {
    flex: 1,
    paddingVertical: scale(10),
    fontSize: scale(16),
  },
  searchIcon: {
    alignSelf: 'center',
  },
  flatListContainer: {
    marginTop: scale(10),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(20),
  },
  itemImage: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(10),
    marginRight: scale(15),
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: scale(16),
    color: 'grey',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: scale(20),
    borderRadius: scale(10),
    elevation: 5,
    maxHeight: scale(300),
    width: '80%',
  },
  languageOption: {
    fontSize: scale(18),
    marginBottom: scale(10),
  },
});

export default SearchBar;
