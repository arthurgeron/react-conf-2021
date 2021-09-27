import styled from 'styled-components';



export const Container = styled.section`
  width: 100%;
  height: 400px;
  box-shadow: 0px 0px 7px 1px #000000;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  height: 40px;
  margin-right: 5px;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  background-color: blue ;
  margin-bottom: 10px;
  border: 0;
`;