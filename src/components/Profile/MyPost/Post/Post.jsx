import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://pbs.twimg.com/profile_images/731480093479030788/HFTz9aVA_400x400.jpg" alt="аватарка" />
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>);
}
export default Post;