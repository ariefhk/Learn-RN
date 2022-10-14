import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { Data } from "./data";

export default function telegram() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#517DA2"
          barStyle="light-content"
        />
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.subContentDrawer}>
            <Image
              style={styles.avatarHeader}
              source={require("./asset/drawwer.png")}
            />
            <Text style={styles.titleName}>Telegram</Text>
            <Image
              style={styles.avatarHeader}
              source={require("./asset/search.png")}
            />
          </View>
        </View>
        {/* Content */}
        <SafeAreaView>
          <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableOpacity style={styles.messagesContainer}>
                    <Image style={styles.avatarMessage} source={item.image} />
                    <View style={styles.message}>
                      <Text>{item.name}</Text>
                      <Text>{item.message}</Text>
                    </View>
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 50,
    backgroundColor: "#517DA2",
    marginTop: 30,
    justifyContent: "center",
  },
  subContentDrawer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  titleName: {
    fontSize: 18,
    color: "white",
  },
  avatarHeader: {
    width: 18,
    height: 12,
  },
  messagesContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  avatarMessage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  message: {
    paddingLeft: 10,
  },
});
