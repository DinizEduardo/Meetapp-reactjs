import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HeaderBar, UserInfos, Content, Info } from './styles';

import logo from '../../assets/logo.svg';
import { signOut } from '../../store/modules/Auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <HeaderBar>
      <Content>
        <img src={logo} alt="" />
        <Info>
          <UserInfos>
            <p>Eduardo Diniz</p>
            <Link to="/profile">Meu perfil</Link>
          </UserInfos>

          <button type="button" onClick={handleLogout}>
            Sair
          </button>
        </Info>
      </Content>
    </HeaderBar>
  );
}
