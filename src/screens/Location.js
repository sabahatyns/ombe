import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Location = ({ navigation, route }) => {
    const [selectedAddress, setSelectedAddress] = useState(addresses[0]); // Selecting the first address by default

    const selectAddress = (address) => {
        setSelectedAddress(address === selectedAddress ? null : address);
    };

    const navigateToAddAddress = () => {
        navigation.navigate('AddAddress');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity></View>
                <View>
                <Text style={styles.headerText}>Address</Text>

                </View>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* List of addresses */}
                {addresses.map((address, index) => (
                    <TouchableOpacity key={index} style={styles.section} onPress={() => selectAddress(address)}>
                        <View style={[styles.addressIcon, {backgroundColor: 'green'}]}>
                            <Icon name={address.icon} size={24} color="white" />
                        </View>
                        <View style={styles.addressContainer}>
                            <Text style={styles.sectionText}>{address.label}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => selectAddress(address)}
                            style={[styles.circle, selectedAddress === address && styles.selectedCircle]}
                        >
                            {selectedAddress === address && (
                                <Icon name="checkmark" size={20} color="white" style={styles.checkIcon} />
                            )}
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}

                {/* Add new address button */}
                <TouchableOpacity style={styles.addNewAddressButton} onPress={navigateToAddAddress}>
                    <Icon name="add" size={24} color="green" />
                    <Text style={styles.addNewAddressText}>Add New Address</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.goBack()} >
                <Text style={styles.submitButtonText}>SAVE ADDRESS</Text>
            </TouchableOpacity>
        </View>
    );
};

const addresses = [
    { label: 'Home Address', icon: 'home' },
    { label: 'Office Address', icon: 'location' },
    { label: 'Shop Address', icon: 'home' },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Center the header text
        paddingHorizontal: 20,
        paddingVertical: 26,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
       // left: 226,
    },
    contentContainer: {
        flexGrow: 1,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    addressIcon: {
        marginRight: 10,
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 10,
    },
    addressContainer: {
        flex: 1,
    },
    sectionText: {
        fontSize: 18,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedCircle: {
        backgroundColor: 'green',
    },
    checkIcon: {
        marginRight: 2,
    },
    submitButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addNewAddressButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderColor:'green',
        borderWidth:1,
        margin:15,
        borderRadius:6
    },
    addNewAddressText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'green',
    },
});

export default Location;
