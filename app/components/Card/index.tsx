import React from 'react'

interface Props {
  title: string
  imageUrl: string
}

const Card: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <div
        className="flex flex-col items-center mb-2"
    >
        <img
            className="object-cover h-60 w-full rounded-md"
            alt={title || ''}
            src={imageUrl || 'https://via.placeholder.com/230x270?text=image%20not%20found'}
        />
        <div className="text-center font-semibold">
            {title}
        </div>
    </div>
  )
}

export default Card