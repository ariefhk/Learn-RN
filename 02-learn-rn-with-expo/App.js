import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Telegram from "./src/Telegram_UI/Telegram";

const name = () => {};

export default function App() {
  return (
    <>
      <Telegram />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
