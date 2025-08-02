// src/pages/Day5/Fruits.jsx
import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  FruitList,
  FruitItem,
  InputBox,
  Button ,
} from './FruitsStyles';

function Fruits() {
  const [fruits, setFruits] = useState(['Apple', 'Banana']);
  const [newFruit, setNewFruit] = useState('');

  const handleAddFruit = () => {
    if (newFruit.trim() !== '') {
      setFruits([...fruits, newFruit]);
      setNewFruit('');
    }
  };

  const handleDeleteFruit = (fruitToDelete) => {
    console.log("Trying to delete:", fruitToDelete);
    const confirmDelete = window.confirm('Are you sure you want to delete "${fruitToDelete}"?');
    if (confirmDelete) {
      setFruits(fruits.filter((fruit) => fruit !== fruitToDelete));
    }
  };

  return (
    <Wrapper>
      <Title> Fruits List</Title>
      <InputBox
        type="text"
        value={newFruit}
        placeholder="Enter a fruit name"
        onChange={(e) => setNewFruit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAddFruit();
        }}
      />
      <FruitList>
        {fruits.map((fruit, index) => (
          <FruitItem key={index}>
            {fruit}
            <Button onClick={() => handleDeleteFruit(fruit)}>Delete</Button>
          </FruitItem>
        ))}
      </FruitList>
    </Wrapper>
  );
}

export default Fruits;