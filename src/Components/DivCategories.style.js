import styled from 'styled-components';

export const DivCategories = styled.div`
  width: 81vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & div {
    margin: 80px 0;
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
    font-size: 24px;
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
    margin-right: 20px;
    cursor: pointer;
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
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

  @media (max-width: 1000px) {
    & div div {
      width: 640px;
    }
  }

  @media (max-width: 650px) {
    & .fetch:hover {
      background: #133488;
      color: #ffaa4c;
      transition: all 0s;
    }
    & div {
      margin: 10px 0;
    }
    & div div {
      flex-direction: column;
      width: 200px;
    }

    & div div span,
    & div div button,
    & div button {
      font-size: 12px;
    }

    & div div button {
      margin-top: 20px;
    }
  }
`;
