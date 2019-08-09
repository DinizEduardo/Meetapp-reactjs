import styled from 'styled-components';

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

  img {
    max-width: 900px;
    max-height: 250px;
  }
`;
