import React from 'react';
import ps from './Profile.module.css';

const Profile = () => {
    return (<div className={ps.content}>
        < div >
            <img src='https://avatars.mds.yandex.net/get-pdb/1766868/85193472-d20f-4d23-9022-4601de220196/s1200' />
        </div >
        <div>
            ava + description
    </div>
        <div>
            My Post
      <div>
                New post
      </div>
            <div className={ps.posts}>
                <div className={ps.item}>
                    post 1
        </div>
                <div className={ps.item}>
                    post 2
        </div>
            </div>
        </div>


    </div >);
}
export default Profile;