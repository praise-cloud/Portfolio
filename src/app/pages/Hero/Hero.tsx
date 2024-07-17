import React from 'react';
import Image from 'next/image';
import { FloatingNav } from '../../components/ui/FloatingNav';
import { TextGenerateEffect } from '../../components/ui/TextGenerateEffect';
import MagicButton from '../../components/ui/MagicButton';

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">

      <div className="flex justify-center relative my-20 z-10">
        <FloatingNav />
        <div className="w-[90vw] max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[6vw] md:text-5xl lg:text-7xl"
            words="Creating Smooth, Secure Blockchain User Experiences"
          />

          <p className="text-center mb-4 text-xs md:text-lg lg:text-2xl px-4">
            Hi, Im Praise, a Blockchain Developer based in Nigeria
          </p>

          <Image src="./IdentityCard.svg" alt="card" width={580} height={328} className="w-full max-w-md" />

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<Image src="./Arrow.svg" alt="arrow" width={12} height={0} />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
