import styled from 'styled-components';

export const DivCategories = styled.div`
  width: 81vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & div {
    margin: 50px 0;
  }

  & div div {
    width: 68vw;
    background: #001e6c;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div div span {
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #e9902e;
  }

  & div div button {
    width: 130px;
    background: #e9902e;
    border: none;
    margin-left: 20px;
  }
`;
