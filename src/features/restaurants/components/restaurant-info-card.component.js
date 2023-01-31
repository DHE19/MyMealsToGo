import React from "react";
import Favourite from "../../../components/favourites/favourite.component";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Address,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "data:image/jpeg;base64,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",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_i, index) => (
              <SvgXml
                key={`start-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
