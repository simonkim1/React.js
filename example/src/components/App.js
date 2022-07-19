import React, { useRef, useState } from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import InputSample2 from './InputSample2';
// import InputSample3 from './InputSample3';
// import UserList from './UserList';
// import UserList2 from './UserList2';
// import UserList3 from './UserList3';
// import UserList3 from './UserList3';
// import UserList4 from './UserList4';
import UserList5 from './UserList5';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }

  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만든다.
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }

  return (
    <>
      {/* <Wrapper>
        <Hello name='react' color='red' isSpecial/>
        <Hello color='pink'/>
      </Wrapper> */}

      {/* <Counter /> */}

      {/* <InputSample /> */}

      {/* <InputSample2 /> */}

      {/* <InputSample3 /> */}

      {/* <UserList /> */}

      {/* <UserList2 /> */}

      {/* <UserList3 /> */}

      {/* <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />

      <UserList4 users={users}/> */}

      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList5 users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};


export default App;