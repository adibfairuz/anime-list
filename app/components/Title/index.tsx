import React from 'react'

const Title: React.FC = ({ children }) => {
  return (
    <div className="text-center font-bold text-xl my-4">{children}</div>
  )
}

export default Title