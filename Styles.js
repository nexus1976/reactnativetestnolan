import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      flexDirection: 'row',
      justifyContent: "center",
    },
    backgroundImage: {
      height: 250,
      width: 250,
      resizeMode: "center",
    },
    slideBox: {
      height: 400,
      width: 500,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
      },
      body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
      }
  });