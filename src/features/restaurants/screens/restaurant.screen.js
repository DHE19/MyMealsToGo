import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Search from "../../../components/search.component";

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <View style={styles.list}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
        />
      </View>
    </SafeArea>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  loaderContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    itemsCenter: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  search: {
    paddingHorizontal: 20,
    flex: 0.1,
    width: "100%",
    justifyContent: "center",
  },
});
