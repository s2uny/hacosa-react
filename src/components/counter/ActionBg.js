import React from 'react'

function ActionBg({ color, handleChange }) {
  return (
    <div>
      <button
        onClick={() => {
          handleChange(color)
        }}
      >
        배경변경
      </button>
    </div>
  )
}

export default ActionBg
