import { useState } from 'react'

function App() {
  const [valueForm, setValueForm] = useState({
    email: '',
    password: '',
  })

  const [로그인유저, set로그인유저] = useState(null)

  // 계속 렌더링 안되게 밖으로 뺌
  // 1.서버로부터 요청 = 비동기
  // 2.비동기인 이유는 서버로부터 받아오는게 얼마나 걸릴지 모름
  // 3.받아온 데이터 비교
  // 비동기인데 동기인척 하기위해 그동안 callback 함수와 promise 함수를 거쳐 지금은 acsync
  const handleSigIn = async () => {
    // 1. 서버로부터 요청 = 비동기
    const response = await fetch('http://localhost:8888/user')

    if (response.ok) {
      // 2. 받아옴
      const user = await response.json()
      // console.log('user', user)

      if (
        user.email === valueForm.email &&
        user.password === valueForm.password
      ) {
        window.alert('로그인성공')
        set로그인유저(user)
      }
    }
  }

  // 3. 받아온 데이터를 비교
  // ??!! 이거이 이해가 잘안간다. ...formValues는 무엇인가? 물어보자
  const handleValueForm = (e) => {
    setValueForm({ ...valueForm, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {로그인유저 ? (
        <div>
          <h1>{로그인유저.name}</h1>
        </div>
      ) : (
        <div>
          <input
            // ??!!  name은 뭐랑 같아야 한다고 했는데 왠지 못들었다
            name="email"
            type="text"
            placeholder="이메일를 입력하세요."
            value={valueForm.email}
            onChange={handleValueForm}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={valueForm.password}
            onChange={handleValueForm}
          />
          <button onClick={handleSigIn}>로그인</button>
        </div>
      )}
    </div>
  )
}

export default App
