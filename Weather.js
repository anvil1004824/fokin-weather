import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Squall: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Tornado: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere is shit",
    subtitle: "Fuck you sky",
  },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
});
