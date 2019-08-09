import styled from 'styled-components';

export const DateLocation = styled.div`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;

    &:not(:first-child) {
      margin-left: 10px !important;
    }
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    input {
      border: 0;
      margin: 5px 0px;
      background: rgba(0, 0, 0, 0.33);
      padding: 10px 15px;
      border-radius: 4px;
      color: #fff;
    }

    textarea {
      border: 0;
      margin: 5px 0px;
      background: rgba(0, 0, 0, 0.33);
      padding: 10px 15px;
      border-radius: 4px;
      color: #fff;
      resize: none;
    }

    button {
      margin-top: 10px;
      width: 17%;
      border: none;
      background: #d44059;
      border-radius: 4px;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      color: #fff;
      svg {
        margin-right: 10px;
      }
    }
  }
`;
