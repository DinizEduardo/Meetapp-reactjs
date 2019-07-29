import styled from 'styled-components';

export const HeaderBar = styled.div`
  width: 100%;
  background: #000;
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  color: #fff;
  max-width: 900px;

  img {
    width: 26px;
    height: 26px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-left: 30px;
    border: none;
    background: #d44059;
    color: #fff;
    font-weight: bold;
    padding: 5px 20px;
    border-radius: 4px;
  }
`;

export const UserInfos = styled.div`
  text-align: right;

  p {
    font-weight: bold;
    font-size: 15px;
    color: #ddd;
  }

  a {
    color: #777;
    font-size: 13px;
  }
`;
