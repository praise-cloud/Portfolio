import Image from 'next/image';
import React from 'react';

export const Tools = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto py-5">
        <div className="flex items-center justify-between px-4 gap-5">
          <div className="relative px-14 h-0.5 bg-gradient-to-l from-white to-transparent"></div>
          <div className="text-2xl font-medium text-white">
            <h1>TOOLS</h1>
          </div>
          <div className="relative px-14 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto py-2">
        <div className="flex justify-between gap-6 items-center">
          {/* the icons */}
          <div className="">
            <Image 
            src='./etherum.svg'
            alt= 'solidity icon'
            width={80}
            height={80}
            />
          </div>
          <div className="">
            <Image 
            src='./react.svg'
            alt= 'solidity icon'
            width={80}
            height={80}
            />
          </div>
          <div className="">
            <Image 
            src='./figma.svg'
            alt= 'solidity icon'
            width={80}
            height={80}
            />
          </div>
          <div className="">
            <Image 
            src='./github.svg'
            alt= 'solidity icon'
            width={80}
            height={80}
            />
          </div>
          <div className="">
            <Image 
            src='./javascript.svg'
            alt= 'solidity icon'
            width={80}
            height={80}
            />
          </div>
          <div className="">
            <Image 
            src='./solidity.svg'
            alt= 'solidity icon'
            width={80}
            height={80}
            />
          </div>
        </div>
      </div>
    </>
  );
};
