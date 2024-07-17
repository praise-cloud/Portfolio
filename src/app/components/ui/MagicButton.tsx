import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}: {
    title: string; 
    icon: JSX.Element, 
    position: string; 
    handleClick?: () => void; 
    otherClasses?: string;
}) => {
  return (
        <button className="relative inline-flex h-16 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6971a200_40%,#272A3C_50%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-t from-[#6971a200] to-[#272a3c00]  px-4 text-xl font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === 'letf' && icon}
        {title}
        {position === 'right' && icon}
    </span>
    </button>
  )
}

export default MagicButton