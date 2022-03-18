import React from 'react';
import styles from './PetListComponent.module.css';
console.log('styles: ', styles);

export type PetType = {
  id: number;
  name: string;
};

export const PetListComponent = ({ pets }: { pets: PetType[] }) => {
  return (
    <div>
      {pets.map(pet => {
        return (
          <div>
            {pet.id} : <span className={styles.name} >{pet.name}</span>
          </div>
        );
      })}
    </div>
  );
};
