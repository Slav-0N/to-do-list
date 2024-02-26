import styled from "styled-components";

export const Modal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    background-color: #fefefe;
    margin: 30% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
`;
