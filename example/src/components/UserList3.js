import React from 'react';

/*
    
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
            {/*
                동적인 배열을 렌더링 할 때에는 "key"라는 props를 설정해야 한다.
                key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야 한다.
            */}

            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}

            {users.map((user, index) => (
                // 만약 배열안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때
                // 설정하는 콜백함수의 두번째 파라미터 index 를 key로 사용 하면 된다.
                <User user={user} key={index}/>
            ))}

            {/* 
                만약에 배열을 렌더링 할 때 key 설정을 하지 않게 된다면 기본적으로 배열의
                index 값을 key로 사용하게 되고, 경고메세지가 뜨게 된다.
                경고메세지가 뜨는 이유는, 각 고유 원소에 key가 있어야만 배열이 업데이트 될 떄
                효율적으로 렌더링 될 수 있기 때문이다.
            */}
        </div>
    );
}

export default UserList;