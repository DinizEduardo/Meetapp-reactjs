import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #4b2c50;
  background: linear-gradient(180deg, #000, #422b46);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 300px;
  img {
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;

    input {
      font-size: 14px;
      flex: 1;
      margin: 5px;
      border: 0;
      padding: 10px 15px;
      border-radius: 4px;
      background: #261c2c;
      color: #fff;

      &::placeholder {
        color: #aaa;
      }
    }

    button {
      flex: 1;
      margin: 15px 5px;
      border: 0;
      padding: 10px;
      background: #d44059;
      border-radius: 4px;
      color: #fff;
      font-size: 20px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#d44059')};
      }
    }

    a {
      color: #aaa;
    }
  }
`;
