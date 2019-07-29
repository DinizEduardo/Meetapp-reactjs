import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  img {
    max-width: 900px;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 30px;
  }

  p {
    font-size: 15px;
    color: #fff;
  }

  span {
    margin-top: 30px;
    color: #666;
    margin-right: 30px;
    align-content: center;
    display: flex;
    align-content: center;
    svg {
      margin-right: 10px;

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
`;

export const MeetupHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  h2 {
    color: #fff;
    font-size: 28px;
  }

  div {
    display: flex;
    flex-direction: row;

    button {
      display: flex;
      border: none;
      align-items: center;
      margin-left: 10px;
      padding: 5px 15px;
      color: #fff;
      border-radius: 4px;
    }
  }
`;

export const DeleteButton = styled.button`
  background: #d44059;
`;

export const EditButton = styled.button`
  background: #4dbaf9;
`;
