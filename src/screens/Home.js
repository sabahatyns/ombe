import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Animated } from "react-native";
import SearchBar from "../components/SearchBar";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useRef, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import translations from "./translation.json";

export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  const toggleMenu = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: showMenu ? 1 : 0.8,
        duration: 111,
        useNativeDriver: true,
      }),
      Animated.timing(moveToRight, {
        toValue: showMenu ? 0 : 221,
        duration: 111,
        useNativeDriver: true,
      }),
    ]).start();
    setShowMenu(!showMenu);
  };

  const getText = (key) => {
    return translations[selectedLanguage][key];
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')} // Replace 'your-image.jpg' with the path to your image
          />
          {showMenu && (
            <TouchableOpacity onPress={toggleMenu} style={{ paddingTop: 36 }}>
              <SimpleLineIcons name="close" size={20} color="black" />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.mainMenuText}>{getText("mainMenu")}</Text>
        {/* Add your menu items here */}
        {showMenu && (
          <View style={styles.menu}>
            <Text style={styles.menuHeading}>{getText("profile")}</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Profile clicked')}>
              <SimpleLineIcons name="user" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("profile")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Components clicked')}>
              <SimpleLineIcons name="logout" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("components")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Transactions clicked')}>
              <SimpleLineIcons name="user" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("transactions")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Product clicked')}>
              <Icon name="product-hunt" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("product")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Pages clicked')}>
              <SimpleLineIcons name="logout" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("pages")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Chat List clicked')}>
              <MaterialCommunityIcons name="chat" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("chatList")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Settings clicked')}>
              <SimpleLineIcons name="settings" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("settings")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Logout clicked')}>
              <SimpleLineIcons name="logout" size={20} color="grey" />
              <Text style={styles.menuText}>{getText("logout")}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Animated.View style={{
        flex: 1, backgroundColor: "white",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        transform: [{ scale: scaleValue }, { translateX: moveToRight }],
        borderRadius: showMenu ? 23 : 0
      }}>
        <ScrollView>
          <View style={styles.mycontainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.smallText}>{getText("goodMorning")}</Text>
              <Text style={styles.largeText}>{getText("Williams")}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={() => console.log('Cart icon pressed')}>
              <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                <SimpleLineIcons name="handbag" size={20} color="green" style={styles.icon} />
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu}>
              <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                <SimpleLineIcons name="menu" size={20} color="black" style={styles.icon} />
              </Animated.View>
            </TouchableOpacity>
          </View>
          </View>
          {/* Search bar */}
          <SearchBar selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  logo: {
    height: 30,
    width: 100,
    marginHorizontal: 52,
    marginVertical: 16
  },
  mainMenuText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: "black"
  },
  mycontainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    padding: 10,
  },
  smallText: {
    fontSize: 15,
    paddingBottom: 6
  },
  largeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "black"
  },
  icon: {
    paddingHorizontal: 10
  },
  menu: {
    position: 'absolute',
    top: 100,
    left: 20,
    borderRadius: 10,
    padding: 10,
  },
  menuHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
  },
  menuText: {
    marginLeft: 10,
    color: "grey",
    fontSize: 16
  },
});
