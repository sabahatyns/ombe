import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


const UserProfileScreen = () => {
    const navigation = useNavigation(); // Initialize navigation

    const handleEditProfile = () => {
        navigation.navigate('EditProfileScreen');
    };

    return (
        <View style={styles.container}>
            {/* Stick Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onPress = () => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="green" style={styles.backIcon} />

                </TouchableOpacity>
                <Text style={styles.headerText}>User Profile</Text>
                <TouchableOpacity onPress={onPress = () => navigation.navigate("edit")}>
                    <Feather name="edit-2" size={24} color="green" style={styles.notificationIcon} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Profile Picture */}
                <View style={styles.profilePicContainer}>
                    <Image source={require('../../assets/p.jpg')} style={styles.profilePic} />
                    <Text style={styles.headerText6}>William Smith</Text>

                </View>

                {/* User Information */}
                <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name="call" size={24} color="green" style={styles.userInfoIcon} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.userInfoText}>Phone</Text>
                        <Text style={styles.userInfoText}>+1234567890</Text>
                    </View>
                </View>

                <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name="mail" size={24} color="green" style={styles.userInfoIcon} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.userInfoText}>Email</Text>
                        <Text style={styles.userInfoText}>example@example.com</Text>
                    </View>
                </View>

                <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name="location" size={24} color="green" style={styles.userInfoIcon} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.userInfoText}>Address</Text>
                        <Text style={styles.userInfoText}>123 Street, City, Country</Text>
                    </View>
                </View>

                {/* Most Ordered Section */}
                <View style={styles.mostOrderedContainer}>
                    <Text style={styles.mostOrderedHeading}>Most Ordered</Text>
                    <ScrollView
                        horizontal
                        style={styles.orderedComponentsContainer}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        showsHorizontalScrollIndicator={false}>
                        {/* First Component */}
                        <View style={[styles.orderedComponent, { backgroundColor: 'green', padding: 26, borderRadius: 26 }]}>
                            <Image source={require('../../assets/s.png')} style={styles.componentImage} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.componentHeading}>Product</Text>
                                <Text style={styles.componentText}>Beverages</Text>
                            </View>
                        </View>

                        {/* Second Component */}
                        <View style={[styles.orderedComponent, { backgroundColor: 'green', padding: 26, borderRadius: 26, marginLeft: 20 }]}>
                            <Image source={require('../../assets/t.png')} style={styles.componentImage} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.componentHeading}>Product</Text>
                                <Text style={styles.componentText}>Beverages</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView >

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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText6: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    backIcon: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notificationIcon: {
        marginLeft: 10,
    },
    profilePicContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    profilePic: {
        width: 110,
        height: 110,
        borderRadius: 60,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userInfoIcon: {
        //  marginRight: 10,
    },
    userInfoText: {
        fontSize: 16,
    },
    mostOrderedContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    mostOrderedHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 26,
    },
    orderedComponentsContainer: {
        flexDirection: 'row',
    },
    orderedComponent: {
        // width: 'auto',
        flexDirection: 'row',
        //  alignItems: 'center',
        marginBottom: 20,
        height: 112,
        width: 212
    },
    componentImage: {
        width: 66,
        height: 50,
        borderRadius: 10,
    },
    componentHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    componentText: {
        fontSize: 14,
        color: '#fff',
        marginTop: 6,
        opacity: .6
    },
});

export default UserProfileScreen;
