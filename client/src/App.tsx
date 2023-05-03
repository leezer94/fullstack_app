import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
  const authLogin = async () => {
    const { data } = await axios.post('http://localhost:8000/auth/signin', {
      email: '2kunhee94@gmail.com',
      password: '!23411',
    });

    console.log('authResponse', data);

    return data;
  };

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/todos', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiMmt1bmhlZTk0QGdtYWlsLmNvbSIsImlhdCI6MTY4MzA5NTg5NSwiZXhwIjoxNjgzMDk2Nzk1fQ.PHAFDuteUILCyftgZJX83UFjLnFx_B4c8QFtnTW5ob4'}`,
      },
    });

    console.log('response', response);

    return response;
  };

  return <div>Initial Page</div>;
}

export default App;
