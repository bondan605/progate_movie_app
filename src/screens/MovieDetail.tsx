import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { API_URL, API_ACCESS_TOKEN } from "@env";

const MovieDetail = ({ navigation }: any): any => {
  const fetchData = (): void => {
    if (API_URL == null || API_ACCESS_TOKEN.length == null) {
      throw new Error("ENV not found");
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    };

    fetch(API_URL, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Movie Detail Page</Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData();
        }}
      />
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
