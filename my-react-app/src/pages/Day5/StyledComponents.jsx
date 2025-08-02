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

export function StyledComponents() {
  return (
    <Wrapper>
      <Title> Welcome to Styled Components </Title>
    </Wrapper>
  );
}

export const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff1744;
  }
`;