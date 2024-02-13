import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 auto;
  width: 192px;
`;

export const Value = styled.div`
  width: 15px;

  /* text-align: center; */
  font-size: 50px;
  font-weight: 900;
  color: grey
  margin: 0 0 0 56px;
`;

export const ButtonPlus = styled.button`
  width: 150px;
  height: 150px;
  font-size: 25px;
  color: white;
  border-radius: 50%;
  background-color: green;
  margin-right: 10px;
  &:focus {
    background-color: green;
  }
`;

export const ButtonMinus = styled.button`
  font-size: 15px;
  color: white;
  background-color: red;
  border: 50px;
`;
