import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import data from "../components/data.json"

const OrderScreen = () => {
    const navigation = useNavigation(); // Initialize useNavigation hook

    const [selectedTab, setSelectedTab] = useState('ongoing');
    const [ongoingOrders, setOngoingOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);

    // Function to randomly assign items to ongoing or completed orders
    const assignOrders = () => {
        const randomIndex = Math.floor(Math.random() * data.images.length);
        const randomImage = data.images[randomIndex];
        setOngoingOrders([randomImage]);
        const remainingImages = data.images.filter((item, index) => index !== randomIndex);
        setCompletedOrders(remainingImages);
    };

    // Call the function to assign orders when the component mounts
    useState(() => {
        assignOrders();
    }, []);

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };

    const navigateToMap = () => {
        // Navigate to the MapScreen when Track Order button is clicked
        navigation.navigate('MapScreen');
    };

    const renderActionButton = (order) => {
        if (selectedTab === 'ongoing') {
            return (
                <TouchableOpacity style={styles.actionButton} onPress={navigateToMap}>
                    <Text style={styles.actionButtonText}>Track Order</Text>
                </TouchableOpacity>
            );
        } else if (selectedTab === 'completed') {
            return (
                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Write Review</Text>
                </TouchableOpacity>
            );
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headerText}>Order</Text>
                </View>
            </View>

            {/* Tab Buttons */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'ongoing' && styles.selectedTab]}
                    onPress={() => handleTabPress('ongoing')}
                >
                    <Text style={[styles.tabButtonText, selectedTab === 'ongoing' && styles.selectedTabText]}>Ongoing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'completed' && styles.selectedTab]}
                    onPress={() => handleTabPress('completed')}
                >
                    <Text style={[styles.tabButtonText, selectedTab === 'completed' && styles.selectedTabText]}>Completed</Text>
                </TouchableOpacity>
            </View>

            {/* Orders */}
            {selectedTab === 'ongoing' && (
                <View style={styles.ordersContainer}>
                    {ongoingOrders.map((item) => (
                        <View key={item.id} style={styles.orderItem}>
                            <Image source={{ uri: item.path }} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.itemText}>{item.text}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                            {renderActionButton(item)}
                        </View>
                    ))}
                </View>
            )}
            {selectedTab === 'completed' && (
                <View style={styles.ordersContainer}>
                    {completedOrders.map((item) => (
                        <View key={item.id} style={styles.orderItem}>
                            <Image source={{ uri: item.path }} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.itemText}>{item.text}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                            {renderActionButton(item)}
                        </View>
                    ))}
                </View>
            )}
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
        paddingHorizontal: 20,
        paddingVertical: 26,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    tabButton: {
        paddingHorizontal: 26,
        paddingVertical: 10,
        borderWidth: 1,  // Add border width
        borderColor: 'black',  // Add border color
        borderRadius:20,
    },
    tabButtonText: {
        fontSize: 16,
        
    },
    selectedTab: {
        backgroundColor: 'green',
        borderRadius: 20,
    },
    selectedTabText: {
        color: 'white',
    },
    ordersContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    orderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
    },
    actionButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 50,
    },
    actionButtonText: {
        color: 'white',
        fontSize:10
    },
});

export default OrderScreen;
