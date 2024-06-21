import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieDetail = ({ navigation }: any): any => {
  const fetchData = (): void => {
    const ACCESS_TOKEN = "YOUR_API_TOKEN";

    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then(async (response) => await response.json())
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
