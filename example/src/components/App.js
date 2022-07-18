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
import UserList4 from './UserList4';
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
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
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

      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />

      <UserList4 users={users}/>
    </>
  );
};


export default App;