import React from 'react';
import { useEffect } from 'react';
import { PetType } from './PetListComponent';

type PetListDataState = {
  loading: boolean;
  error: Error | null;
  data: PetType[] | null;
};

export const usePetListData = (): PetListDataState => {
  const [state, setState] = React.useState<PetListDataState>({
    loading: true,
    error: null,
    data: null,
  });
  useEffect(() => {
    fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available', {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setState({
          loading: false,
          error: null,
          data: data,
        });
      })
      .catch(error => {
        setState({
          loading: false,
          error: error,
          data: null,
        });
      });
  }, []);

  return state;
};
