import React from 'react';
import s from './Post.module.css';
// import '../../../../../../font-awesome/css/font-awesome.min.css';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'

function Post(props) {
  return (
    <div className={s.post_item}>
      <img src={props.img} alt='img' className={s.postAva} />
      <div className={s.postInfo}>
        <p className={s.postText}>{props.massage}</p>
      </div>
      <p className={s.postLike}>Like{props.like}</p>
      <i className="far fa-thumbs-up">sdsdsd</i>
    </div>
  );
}
export default Post;