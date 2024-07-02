import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckoutScreen = ({ navigation, route }) => {
    const totalPrice = route.params.totalPrice;
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Checkout</Text>
                <View style={{ flex: 1 }}></View>
            </View>
            <ScrollView>

                <View style={styles.section}>
                    <View style={styles.iconContainer}>
                        <Icon name="location" size={24} color="white" />
                    </View>
                    <Text style={styles.sectionText}>Location</Text>
                    {/* Add location details here */}
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('location')}>

                            <Icon name="chevron-forward" size={24} color="green" style={styles.Icon5} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Payment */}
                <View style={styles.section}>
                    <View style={styles.iconContainer}>
                        <Icon name="browsers-sharp" size={24} color="white" />
                    </View>
                    <Text style={styles.sectionText}>Payment</Text>
                    {/* Add payment details here */}
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('payment')}>

                            <Icon name="chevron-forward" size={24} color="green" style={styles.Icon5} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Additional Notes */}
                <ScrollView style={styles.section5}>
                    <Text style={styles.sectionHeading}>Additional Notes</Text>
                    <TextInput style={styles.textInput} multiline={true} placeholder='Write here ...' />
                </ScrollView>
                <View style={{
                    alignSelf: "center",
                    //marginVertical: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: '90%',
                    borderBottomColor: "green",
                    borderBottomWidth: 1,
                    paddingVertical: 20,
                    marginTop: 66
                }}>
                    <Text> Shipping</Text>
                    <Text style={{
                        color: "green"
                    }}
                    > FREE Delivery
                    </Text>
                </View>

                {/* Total Price */}
                <View style={styles.totalPrice}>
                    <Text style={styles.totalPriceText}>My Order</Text>
                    <Text style={styles.totalPriceText}> ${totalPrice}</Text>
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("order")}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
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
        justifyContent: 'space-between', // Center the header text
        paddingHorizontal: 20,
        paddingVertical: 26,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 220
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    section5: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    iconContainer: {
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 10,
        marginRight: 10,
    },
    sectionText: {
        fontSize: 18,
        marginLeft: 10,
    },
    sectionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        minHeight: 100,
    },
    Icon5: {
        left: 176
    },
    totalPrice: {
        alignSelf: "center",
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '90%'


    },
    totalPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
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
});

export default CheckoutScreen;
