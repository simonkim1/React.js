import React from 'react';
import './App.css';

function Hi(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
};

function formatDate(date) {
  return date.toLocaleDateString();
};

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function Avatar(props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name} />
  );
};

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div>
        {props.user.name}
      </div>
    </div>
  );
};

// function Comment(props) {
//   return (
//     <div>
//       <div>
//         <img
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div>
//           {props.author.name}
//         </div>
//       </div>
//       <div>
//         {props.text}
//       </div>
//       <div>
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// };

function Comment(props) {
  return (
    <div>
      <UserInfo user={props.author} />
      <div>
        {props.text}
      </div>
      <div>
        {formatDate(props.date)}
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Hi name="Kim" />
      <Hi name="Lee" />
      <Hi name="Choi" />
      <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author} />
    </>
  );
};


export default App;