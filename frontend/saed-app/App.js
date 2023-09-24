import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./navigator/StackNavigator";
import { UserProvider } from "./context/AuthContext";
import { ExpertsProvider } from "./context/ExpertsContext";
import { ServicesProvider } from "./context/ServicesContext";
import { BookContextProvider } from "./context/BookContext";

export default function App() {
  return (
    <>
      <BookContextProvider>
        <ServicesProvider>
          <ExpertsProvider>
            <UserProvider>
              <StackNavigator />
            </UserProvider>
          </ExpertsProvider>
        </ServicesProvider>
      </BookContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
