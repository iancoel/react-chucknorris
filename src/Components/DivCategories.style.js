import styled from 'styled-components';

export const DivCategories = styled.div`
  width: 81vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & div {
    margin: 30px 0;
  }

  & div div {
    width: 68vw;
    background: #001e6c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
    text-transform: uppercase;
  }

  & div div span {
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #e9902e;
    cursor: default;
  }

  & div div button,
  & div button {
    padding: 10px 40px;
    width: 130px;
    background: #133488;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    font-family: Roboto;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffaa4c;
    text-transform: uppercase;
    transition: all 0.2s;
  }

  & div div button:hover,
  & div button:hover {
    background: #e9902e;
    color: #ffc061;
  }

  & div button {
    margin: 0 auto;
  }

  & .active {
    background: #e9902e;
    color: #ffc061;
  }
`;
