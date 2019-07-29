import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;

    input {
      margin-top: 10px;
      background: rgba(0, 0, 0, 0.3);
      font-size: 16px;
      border: none;
      border-radius: 4px;
      padding: 10px 15px;
      color: #fff;
    }

    hr {
      margin-top: 10px;
      border: 1px solid rgba(66, 43, 70, 0.5);
    }

    button {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: #d44059;
      border-radius: 4px;
      margin-top: 20px;
      padding: 10px 5px;
      color: #fff;

      svg {
        margin-right: 20px;
      }
    }
  }
`;
