import React from 'react';
import { PetListComponent } from './PetListComponent';
import { usePetListData } from './usePetListData';

export const PetList = (): JSX.Element => {
  const { loading, error, data } = usePetListData();
  if (loading) {
    return <p>Loading... </p>;
  }
  if (error || !data) {
    return <p>Error: {error?.message || 'No data'}</p>;
  }
  return <PetListComponent pets={data} />;
};
