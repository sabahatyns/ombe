import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import data from "../components/data.json";

const CartScreen = () => {
    const navigation = useNavigation(); // Initialize navigation

    // Combine items from JSON file
    const allItems = [...data.images, ...data.featured.images];

    // State to manage cart items
    const [cartItems, setCartItems] = useState(allItems.map(item => ({
        ...item,
        quantity: 1 // Set default quantity to 1
    })));

    const incrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity++;
        setCartItems(updatedCartItems);
    };

    const decrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity--;
            setCartItems(updatedCartItems);
        }
    };

    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={{
                    flexDirection: "column"
                }}>
                    <Text style={styles.headerText}>My Cart</Text>
                    <Text style={styles.item5}>{getTotalItems()} Items</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="location" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{
                backgroundColor: "white",
                opacity: 1
            }}>
                <View style={styles.header5}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.item6}>Subtotal  </Text>
                        <Text style={styles.item5}>${getTotalPrice().toFixed(2)} </Text>
                    </View>

                    <Text style={{ color: "green" }}>
                        Your order is eligible for free Delivery
                    </Text>
                </View>

                {/* Cart Items */}
                {cartItems.map((item, index) => (
                    <View key={index} style={styles.cartItem}>
                        <Image
                            style={styles.itemImage}
                            source={{ uri: item.path }}
                        />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>{item.text}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                                <Text style={{
                                    color: "green",
                                    marginLeft: 24,
                                    alignItems: "center",
                                    opacity: .6,
                                    marginTop: 5
                                }}>(2k Reviews) </Text>
                            </View>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={() => decrementQuantity(index)}>
                                    <Icon name="remove-circle" size={24} color="green" />
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{item.quantity}</Text>
                                <TouchableOpacity onPress={() => incrementQuantity(index)}>
                                    <Icon name="add-circle" size={24} color="green" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeItem(index)} style={{marginLeft:124}}>
                                    <Text style={styles.removeButton}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Proceed Button */}
            <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate('check', { totalPrice: getTotalPrice() })}>
                <Text style={styles.proceedButtonText}>Proceed ({getTotalItems()} items) </Text>
            </TouchableOpacity>
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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header5: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 20,
        zIndex: 1, // Ensure the header stays on top
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    item6: {
        fontSize: 16
    },
    item5: {
        fontWeight: "bold",
        fontSize: 16

    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
        marginRight: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    removeButton: {
        color: 'green',
      //  marginLeft: 124,
        marginTop: 5,
    },
    proceedButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        paddingVertical: 15,
        margin: 20,
    },
    proceedButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CartScreen;
