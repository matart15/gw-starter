import React from 'react';
import { DatePicker } from 'antd';
import styles from './PetListComponent.module.css';
console.log('styles: ', styles);

export type PetType = {
  id: number;
  name: string;
};
const styles1 = {
  name: {
    backgroundColor: 'cyan',
  },
};

export const PetListComponent = ({ pets }: { pets: PetType[] }) => {
  return (
    <div>
      <DatePicker />
      {pets.map(pet => {
        return (
          <div>
            {pet.id} :{' '}
            <button type="button" className={styles.error}>
              {pet.name}
            </button>{' '}
            : 2
          </div>
        );
      })}
    </div>
  );
};
