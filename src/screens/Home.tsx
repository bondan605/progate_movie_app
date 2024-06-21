import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Movie Page</Text>
      <Button
        title="Pergi Ke MovieDetail"
        onPress={() => navigation.navigate("MovieDetail")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginBottom20: {
    marginBottom: 20,
  },
});
