import React from 'react'

const Page: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-200">
        <div className="bg-white flex flex-col mx-auto max-w-[500px] min-h-screen relative">
            {children}
        </div>
    </div>
  )
}

export default Page