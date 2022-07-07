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
    const USERS = [
        {
            id: 1,
            userName: "Kim",
            email: "kim@gmail.com"
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
    return (
        // ↓↓ 배열이 고정적인경우

        // <div>
        //     <User user={USERS[0]} />
        //     <User user={USERS[1]} />
        //     <User user={USERS[2]} />
        // </div>

        // ↓↓ 동적인 배열인 경우 map을 이용해 loop로 처리
        <div>
            {USERS.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

export default UserList;