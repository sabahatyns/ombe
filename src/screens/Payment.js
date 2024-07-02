import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Payment = ({ navigation }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const selectMethod = (method) => {
        setSelectedMethod(selectedMethod === method ? null : method);
    };

    const renderPaymentMethod = (method, icon) => {
        return (
            <TouchableOpacity onPress={() => selectMethod(method)} style={styles.methodContainer}>
                <View style={styles.methodHeader}>
                    <View style={styles.methodIconContainer}>
                        <Icon name={icon} size={24} color="green" />
                        <Text style={styles.methodHeaderText}>{method}</Text>
                    </View>
                    <View style={[styles.selectCircle, selectedMethod === method && styles.selectedCircle]} />
                </View>
                {(selectedMethod === method && method !== 'Cash on Delivery') && (
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder={`Enter details`} />
                        <TouchableOpacity style={styles.continueButton}>
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {(selectedMethod === 'Cash on Delivery' && selectedMethod === method) && (
                    <Text style={styles.cashOnDeliveryText}>You will pay in cash upon delivery.</Text>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Payment</Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* Debit/Credit Card */}
                {renderPaymentMethod('Debit/Credit Card', 'card-outline')}

                {/* Cash on Delivery */}
                {renderPaymentMethod('Cash on Delivery', 'cash-outline')}

                {/* Google Pay */}
                {renderPaymentMethod('Google Pay/Phone Pay', 'logo-google')}

                {/* Payment Wallet */}
                {renderPaymentMethod('Payments/Wallet', 'wallet-outline')}
            </ScrollView>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.goBack()}>
                <Text style={styles.continueButtonText}>Continue</Text>
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
        paddingHorizontal: 20,
        paddingVertical: 26,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    methodContainer: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20,
        padding: 15,
        marginBottom: 10,
    },
    methodHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    methodIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    methodHeaderText: {
        fontSize: 18,
        marginLeft: 10,
        color: 'green',
    },
    selectCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'green',
    },
    selectedCircle: {
        backgroundColor: 'green',
    },
    inputContainer: {
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    continueButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginBottom: 5,
    },
    continueButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cashOnDeliveryText: {
        marginTop: 10,
        fontSize: 16,
       // color: 'green',
        //textAlign: 'center',
    },
});

export default Payment;
