import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
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
`;

export const ImageSpace = styled.label`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 250px;
  color: #777;
  background: rgba(0, 0, 0, 0.45);
`;