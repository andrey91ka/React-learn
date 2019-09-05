import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Posts
  <div>
                New post
  </div>
            <div className={s.posts}>
                <Post message='hi, how are you?' like='14' />
                <Post message='its my first post' like='3' />

            </div>

        </div>);
}
export default MyPosts;