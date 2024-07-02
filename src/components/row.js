import React, { useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Animated, Easing } from 'react-native';
import SliderComponent from './Slider';

const SliderRow = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -100, // Adjust to fit your content width
        duration: 5000, // Adjust the duration of the animation
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={[1,]} // Just to create 5 components
        renderItem={({ index }) => <SliderComponent key={index} />}
        keyExtractor={(item, index) => String(index)}
        horizontal
        contentContainerStyle={{ paddingLeft: 100 }}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SliderRow;
