import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
let photo = 'https://24smi.org/public/media/person/2017/12/27/kdf5xxmete9a-naruto-uzumaki.jpg';
function MyPosts() {
  return (
    <div className={s.post}>
      <form>
        <textarea className={s.post_input} cols='92' rows='15' />
        <div className={s.postingArea}>
          <p>Press button for post</p>
          <button type='submit' className={s.post_button}>Post</button>
        </div>
      </form>
      <Post img={photo} massage='Hello' like={123} />
      <Post img={photo} massage='First post' like={12}/>
    </div>
  );
}
export default MyPosts;