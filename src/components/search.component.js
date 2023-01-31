import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { LocationContext } from "../services/location/location.context";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled(View)`
  padding: 0px ${(p) => p.theme.space[3]};
  flex: 0.1;
  width: 100%;
  justify-content: center;
`;

const Search = ({ onFavouritesToggle, isFavouritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="search for a location"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => setSearchKeyword(text)}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};

export default Search;
