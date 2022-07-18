import React from 'react';

// 컴포넌트 재사용을 고려하지 않는 경우
function UserList() {
    const users = [
        {
            id: 1,
            username: 'Kim',
            email: 'Kim@gamil.com'
        },
        {
            id: 2,
            username: 'Lee',
            email: 'Lee@naver.com'
        },
        {
            id: 3,
            username: 'Choi',
            email: 'Choi@hanmail.net'
        }
    ];

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    );
}

export default UserList;