import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
  return (
    <div className={s.context}>
      <img src='https://news.rambler.ru/img/2020/03/05/100025.662902.9046.jpeg' alt='img2' className={s.contextPhoto}></img>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
export default Profile; 