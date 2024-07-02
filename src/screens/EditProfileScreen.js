import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen = () => {
    const navigation = useNavigation();
    const [profilePicUri, setProfilePicUri] = useState(null);

    const handleSaveChanges = () => {
        // Assuming you have state variables to hold user data like phone, email, address, etc.
        const updatedUserData = {
            phone: phone, // Assuming phone is a state variable holding the updated phone number
            email: email, // Assuming email is a state variable holding the updated email
            address: address, // Assuming address is a state variable holding the updated address
            // Add other user data as needed
        };
    
        // Navigate back to User Profile screen and pass updated user data as params
        navigation.navigate('user', { userData: updatedUserData });
    };

    const handleEditProfilePicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setProfilePicUri(image.path);
        }).catch(error => {
            console.log('ImagePicker Error: ', error);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="green" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Edit Profile</Text>
            </View>
            <View style={styles.profilePicContainer}>
                {profilePicUri ? (
                    <Image source={{ uri: profilePicUri }} style={styles.profilePic} />
                ) : (
                    <View style={styles.profilePic}>
                        <Text>Profile Picture</Text>
                    </View>
                )}
                <TouchableOpacity style={styles.editIconContainer} onPress={handleEditProfilePicture}>
                    <Feather name="edit-2" size={24} color="green" />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <TextInput style={styles.input} placeholder="Phone" placeholderTextColor={"black"} value='' />
                <TextInput style={styles.input} placeholder="Email"   placeholderTextColor={"black"}/>
                <TextInput style={styles.input} placeholder="Address"  placeholderTextColor={"black"} />
                <TextInput style={styles.input} placeholder="Location"  placeholderTextColor={"black"} />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    backIcon: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profilePicContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIconContainer: {
        position: 'absolute',
        bottom: -12,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        color:"black",
        textAlign:"center",
        alignSelf: 'center',
        fontFamily: 'Lato-Regular',
        letterSpacing: 1.5,
        width: '80%',
        fontSize: 15,
        marginTop: 20,
        height: 35,
        


    },
    saveButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default EditProfileScreen;
