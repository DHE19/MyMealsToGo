import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text, Image } from "react-native";
export const RestaurantCard = styled(Card)`
  background-color: ${(p) => p.theme.colors.bg.primary};
  margin-bottom: ${(p) => p.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(p) => p.theme.colors.bg.primary};
  padding: ${(p) => p.theme.space[3]};
`;

export const Info = styled(View)`
  padding: ${(p) => p.theme.space[3]};
`;
export const Rating = styled(View)`
  flex-direction: row;
  padding: ${(p) => p.theme.space[2]} 0;
`;

export const Address = styled(Text)`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.caption};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
