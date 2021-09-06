import styled from 'styled-components';

export const Top = styled.header`
  width: 81vw;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #001e6c;

  & h1 {
    width: 255px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #e9902e;
    cursor: default;
    text-transform: uppercase;
  }

  @media (max-width: 650px) {
    & h1 {
      font-size: 24px;
    }
  }
`;
