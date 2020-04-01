import React from 'react';

function App(props) {
  return (
    <button
    style={{
      backgroundColor: 'black',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      fontSize: '16px',
      cursor: 'pointer'
    }}
    onClick={()=>props.history.push('/memberList')}>
      See Users
    </button>
  );
}

export default App;
