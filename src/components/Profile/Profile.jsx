import React from 'react';
import ps from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
    return (<div className={ps.content}>
        < div >
            <img src='https://avatars.mds.yandex.net/get-pdb/1766868/85193472-d20f-4d23-9022-4601de220196/s1200' />
        </div >
        <div>
            ava + description
    </div>
        <MyPosts />


    </div >);
}
export default Profile;