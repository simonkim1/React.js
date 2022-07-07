import React from 'react';

// function UserList() {
//     const USERS = [
//         {
//             id: 1,
//             userName: "Kim",
//             email: "kim@gmail.com"
//         },
//         {
//             id: 2,
//             userName: "Lee",
//             email: "Lee@naver.com"
//         },
//         {
//             id: 3,
//             userName: "Choi",
//             email: "Choi@daum.net"
//         }
//     ];
//     return (
//         <div>
//             <div>
//                 <b>{USERS[0].userName}</b> <span>({USERS[0].email})</span>
//             </div>
//             <div>
//                 <b>{USERS[1].userName}</b> <span>({USERS[1].email})</span>
//             </div>
//             <div>
//                 <b>{USERS[2].userName}</b> <span>({USERS[2].email})</span>
//             </div>
//         </div>
//     );
// }




// ↓↓ 재사용 되는 코드를 컴포넌트로 만듬 ↓↓

function User({ user }) {
    return (
        <div>
            <b>{user.userName}</b> <span>({user.userName})</span>
        </div>
    );
}

function UserList() {
    const USERS1 = [
        {
            id: 1,
            userName: "Kim",
            email: "Kim@gmail.com"
        },
        {
            id: 2,
            userName: "Lee",
            email: "Lee@naver.com"
        },
        {
            id: 3,
            userName: "Choi",
            email: "Choi@daum.net"
        }
    ];
    const USERS2 = [
        {
            userName: "kim",
            email: "kim@gmail.com"
        },
        {
            userName: "lee",
            email: "lee@naver.com"
        },
        {
            userName: "choi",
            email: "choi@daum.net"
        }
    ];
    return (
        // ↓↓ 배열이 고정적인경우

        // <div>
        //     <User user={USERS[0]} />
        //     <User user={USERS[1]} />
        //     <User user={USERS[2]} />
        // </div>

        // ↓↓ 동적인 배열인 경우 map을 이용해 loop로 처리
        <div>
            {USERS1.map(user => (
                <User user={user} key={user.id}
                    // 배열 안의 원소가 가지고 있는 고휴한 값이 있는 경우
                />
            ))}
            <br />
            <br />
            {USERS2.map((user, index) => (
                <User user={user} key={index}
                    // 배열 안의 원소가 가지고 있는 고휴한 값이 없는 경우에는 index로 사용가능
                />
            ))}

            {/*
                배열을 랜더링 할 때 key 설정을 하지 않는다면 기본적으로 배열의 index 값을 key로 사용 하게 된다.
                하지만, 각 고유 원소에 key가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링이 될 수 있기 때문에
                key를 설정 하지 않고 사용 하게 되면 경고메세지가 뜨게 된다.
            */}
        </div>
    );
}

export default UserList;