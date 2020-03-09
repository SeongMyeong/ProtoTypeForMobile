import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../reducer/user';
import { useDispatch } from 'react-redux';
import './Profile.scss';
import DummyUsers from '../../common/dummyUsers.json';

export const ProfileItem = ({ item, history }) => {
  const dispatch = useDispatch();
  //const { cardData } = useSelector(state => state.user);
  const login = ({ name, gb_cd }) => {
    dispatch({
      type: LOGIN,
      data: {
        username: name,
        gb_cd: gb_cd,
      },
    });
    history.push('/');
  };
  return (
    <li className="profile">
      <div>
        <Link
          className="profile-link"
          tabindex="0"
          //href="/SwitchProfile?tkn=3NDFPN5UTBGVBNDS564IWJ5GEA"
          //to="/"
          onClick={() => login(item)}
          data-uia="action-select-profile+secondary"
        >
          <div className="avatar-wrapper">
            <div
              className="profile-icon"
              style={{ backgroundImage: `url(${item.backgroundURL})` }}
            ></div>
          </div>
          <span className="profile-name">{item.name}</span>
        </Link>
        <div className="profile-children"></div>
      </div>
    </li>
  );
};
const Profile = ({ history }) => {
  return (
    <div className="profiles-gate-container">
      <div className="centered-div list-profiles-container">
        <div className="list-profiles">
          <div className="profile-gate-label">
            Netflix를 시청할 프로필을 선택하세요.
          </div>
          <ul className="choose-profile">
            {DummyUsers.map(item => {
              return <ProfileItem history={history} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
