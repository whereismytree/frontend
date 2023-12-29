import Search from 'components/Search';
import React from 'react';

export const SearchPage = () => {
  return (
    <Search>
      <Search.Header>
        <Search.Input />
        <Search.CurrentLocationButton />
      </Search.Header>
      <Search.Result />
    </Search>
  );
};
