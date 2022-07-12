import React, { useState } from 'react'
import Text from './components/counter/Text'
import ActionButton from './components/counter/ActionButton'
import { Box } from './components/counter/Box'
import ActionBg from './components/counter/ActionBg'

function App() {
  const [카운터, 카운터변경값] = useState(0)
  const 부모버튼 = (자식이준카운트값) => {
    카운터변경값(자식이준카운트값)
  }

  const [boxBg, setBoxBg] = useState('blue') // 먼저 변경되야 할 오브젝트를 정했어,
  const handleChange = (boxcomponentsBg) => {
    setBoxBg(boxcomponentsBg)
  } // 다른 컴퍼넌트에게 값을 던저주고, 그걸 받아와 변경해줄꺼야

  return (
    <div>
      <Text num={카운터} />
      <ActionButton num={카운터} onClick버튼={부모버튼} />

      <Box style={{ backgroundColor: `red` }} />
      <ActionBg color={boxBg} onChangeBG={handleChange} />
    </div>
  )
}

export default App

// 버튼을 클릭하면 박스의 배경 컬러를 변경해주는 기능을 만들꺼야
// 그러면 필요한건 컬러가 변경되는 박스 컴포넌트, 컬러를 변경시킬 버튼 컴포넌트
// 둘은 형제 컴포넌트가 될꺼니깐 state는 부모한테 준다. 왜냐하면 형제끼리는 state 교환이 불가하니깐

// 둘다 필요한 값은 배경 컬러야 상태가 변경되는것도 배경 컬러이지
// 그럼 부모 컴포넌트에 useState를 이용해 변경되는 값을 정의하고, 변결된상태값을 정의하고, 초기값을 설정해
// 설정된 변경되는 값은 부모 컴퍼넌트에서 import 해온 자식 컴퍼넌트에 props로 명시해줘,
// 그리고 무엇을 어떻게 했을때 무엇이 어떻게 변할까를 정의해줘야 하는데
// '무엇을 어떻게 했을 때' 는 = 버튼을 클릭했 을 때 이고
// '무엇이 어떻게 변할까' 는 = 박스의 배경색이 변한다 이야
// 무엇이 어떻게 변할까의 설정된 값은 부모의 버튼 컴포넌트에 이렇게 명시해줘
// 자식한테토스={무엇이 어떻게 변할끼}
