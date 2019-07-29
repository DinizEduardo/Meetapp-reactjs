import React from 'react';

import { Link } from 'react-router-dom';
import { HeaderBar, UserInfos, Content, Info } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <HeaderBar>
      <Content>
        <img src={logo} alt="" />
        <Info>
          <UserInfos>
            <p>Eduardo Diniz</p>
            <Link to="/">Meu perfil</Link>
          </UserInfos>

          <button type="button">Sair</button>
        </Info>
      </Content>
    </HeaderBar>
  );
}
