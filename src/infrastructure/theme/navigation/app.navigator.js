import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import MapScreen from "../../../features/map/screens/map.screen";
import RestaurantsNavigator from "./restaurants.navigator";
import { RestaurantsContextProvider } from "../../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../../services/location/location.context";
import FavouritesContextProvider from "../../../services/favourites/favourites.context";
const Tab = createBottomTabNavigator();
const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

const handleIcons = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName =
      route.name === "Restaurants"
        ? "md-restaurant"
        : route.name === "Settings"
        ? "md-settings"
        : "md-map";

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});
const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={handleIcons}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
