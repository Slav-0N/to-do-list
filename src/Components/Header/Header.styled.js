import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  padding: 20px 0 20px 0;
  background-color: aquamarine;

  a {
    text-decoration: none; /* Убирает подчеркивание */
    color: inherit; /* Использует цвет текста родительского элемента */
  }
`;
