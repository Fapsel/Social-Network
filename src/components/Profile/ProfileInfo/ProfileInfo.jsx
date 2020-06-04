import React from 'react';
import s from './ProfileInfo.module.css';
function ProfileInfo() {
  return (
    <div className={s.context_information}>
      <img src='https://24smi.org/public/media/person/2017/12/27/kdf5xxmete9a-naruto-uzumaki.jpg'
        alt='narutoImg' className={s.avatar}></img>
      <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.</p>
    </div>
  );
}
export default ProfileInfo; 