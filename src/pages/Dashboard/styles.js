import styled, { css } from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      color: #fff;

      svg {
        cursor: pointer;
      }
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-bottom: 20px;

    h2 {
      font-size: 30px;
    }

    button {
      display: flex;
      align-items: center;
      border: none;
      background: #d44059;
      border-radius: 4px;
      padding: 10px 10px;
      color: #fff;

      svg {
        padding-right: 5px;
      }
    }
  }
`;

export const Meetup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.15);
  opacity: ${props => (props.past ? 0.4 : 1)};
  padding: 20px 10px;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-left: 10px;
    }

    p {
      color: #999;
      font-size: 13px;
    }
  }

  p {
    font-weight: bold;
    font-size: 15px;
    margin-left: 20px;
  }
`;
