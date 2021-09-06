import styled from 'styled-components';

export const JokeStyle = styled.div`
  width: 81vw;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #001e6c;
  cursor: default;
  padding: 30px 50px;

  & p {
    font-family: Times New Roman;
    font-size: 32px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #e9902e;
  }

  @media (max-width: 650px) {
    & p {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;
