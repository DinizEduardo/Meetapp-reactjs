import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderBar, UserInfos, Content, Info } from './styles';

import logo from '../../assets/logo.svg';
import { signOut } from '../../store/modules/Auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.user);
  console.tron.log(profile);
  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <HeaderBar>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="" />
        </Link>

        <Info>
          <UserInfos>
            <p>{profile.name}</p>
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
