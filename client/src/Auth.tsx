import React, { useCallback } from 'react';

const Auth = (): JSX.Element => {
  const CLIENT_ID = 'a734f37166b684230934';
  const REDIRECT_URL = 'http://localhost:3000';

  const onClick = useCallback((): void => {
    const url = `http://localhost:8000/auth/google`;
    // OAuth app을 등록할때 작성했던 redirect url과 발급받은 CLIENT_ID를 바탕으로 URL을 생성합니다.

    window.open(url);
    // 해당 URL로 이동하기
  }, []);

  return <button onClick={onClick}>클릭클릭1</button>;
};

export default Auth;
