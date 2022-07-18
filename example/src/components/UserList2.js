import React from 'react';

/*
    컴포넌트 재사용을 고려하는 경우, 아래와 같이 작성 할 수 있다.
    하지만, 배열이 고정적인 경우 상관 없겠지만, 동적인 배열은 렌더링 하지 못한다.
*/

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

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
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    );
}

export default UserList;