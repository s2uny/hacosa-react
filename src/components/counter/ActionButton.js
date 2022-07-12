import React from 'react'

function ActionButton({ num, onClick버튼 }) {
  return (
    <div>
      변경시킬 버튼
      <button
        onClick={() => {
          onClick버튼(num - 1)
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          onClick버튼(num + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default ActionButton
