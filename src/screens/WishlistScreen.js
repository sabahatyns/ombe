import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import data from '../components/data.json'; // Import JSON data here
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
    const navigation = useNavigation();

    // Combine data from 'images' and 'featured' sections
    const allItems = [...data.images, ...data.featured.images];

    // States for search functionality
    const [searchText, setSearchText] = useState('');
    const [filteredItems, setFilteredItems] = useState(allItems);

    // Function to handle search
    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = allItems.filter(item =>
            item.text.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Wishlist</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                    <Icon name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            {searchText !== '' && (
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search wishlist"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            )}

            {/* Wishlist Items */}
            <ScrollView style={{ marginTop: 20 }}>
                {filteredItems.map((item, index) => (
                    <View key={index} style={styles.wishlistItemContainer}>
                        <View style={styles.wishlistItem}>
                            <Image
                                style={styles.itemImage}
                                source={{ uri: item.path }}
                            />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>{item.text}</Text>
                                <Text style={styles.itemDescription}>Variant : White Stripes</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 24, paddingBottom: 6 }}>
                            <Text style={{ fontWeight: "bold", marginLeft: 65 }}>{item.price}</Text>
                            <TouchableOpacity>
                                <Icon name="heart" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        zIndex: 1, // Ensure the header stays on top
        elevation: 3, // For Android shadow
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    searchBar: {
        marginHorizontal: 20,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    wishlistItemContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        elevation: 5,
        width: '90%',
        borderRadius: 5,
    },
    wishlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 6,
    },
    itemDetails: {
        flex: 1,
        marginRight: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
    },
});

export default WishlistScreen;
