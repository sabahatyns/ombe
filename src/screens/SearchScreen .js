import React, { useState } from 'react';
import { View, TextInput, FlatList ,StyleSheet,Text,TouchableOpacity, Image } from 'react-native';
import data from '../components/data.json'; // Import JSON data here
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

const SearchScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = data.images.filter(item =>
            item.text.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search beverages and foods"
                    placeholderTextColor="grey"
                    value={searchText}
                    onChangeText={(text) => handleSearch(text)}
                />
                <Icon name="search" size={scale(20)} color="grey" style={styles.searchIcon} />
            </View>
            {searchText !== '' && (
                <FlatList
                    data={filteredItems}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemContainer}>
                            <Image source={{ uri: item.path }} style={styles.itemImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.itemText}>{item.text}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        zIndex: 1, // Ensure the header stays on top
        elevation: 3, // For Android shadow
    },
    searchContainer: {
        flexDirection: 'row',
        width: '95%',
        alignSelf:"center",
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
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: scale(16),
        marginHorizontal:scale(20),
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
});

export default SearchScreen;
