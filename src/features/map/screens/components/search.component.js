import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { LocationContext } from "../../../../services/location/location.context";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled(View)`
  padding: 0px ${(p) => p.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%;
  top: 45px;
`;

// I NEED TO APPLY A HOC
const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="search for a location"
        icon={"map"}
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
