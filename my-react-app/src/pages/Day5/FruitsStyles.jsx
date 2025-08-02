import styled from 'styled-components';
import React from 'react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export const Message = styled.h2`
  color: ${(props) => props.color || '#2c3e50'};
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const InputBox = styled.input`
  margin-top: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 6px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #6a0dad;
  text-align: center;
  margin: 20px 0;
`;

export const FruitList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const FruitItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 6px;
`;

export const Button = styled.button`
  background-color: crimson;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;