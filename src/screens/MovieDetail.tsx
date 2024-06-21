import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieDetail = ({ navigation }: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Movie Detail Page</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MovieDetail;

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
