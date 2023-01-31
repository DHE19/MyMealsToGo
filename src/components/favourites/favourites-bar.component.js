import { Spacer } from "../spacer/spacer.component";
import React from "react";
import styled from "styled-components";
import { View, ScrollView, TouchableOpacity } from "react-native";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled(View)`
  padding: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((res) => {
          const key = res.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size={"medium"}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetails", {
                    restaurant: res,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={res} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
