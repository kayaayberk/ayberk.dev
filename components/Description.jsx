'use client';

import Link from 'next/link';
import Card from './Card';
import LandingImage from './LandingImage';

function Description() {
  return (
    <Card className={'flex flex-row border-none shadow-none w-full'} desc>
      <div className='flex h-full w-full md:w-1/2 flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='flex items-center justify-start gap-2 text-3xl font-semibold tracking-tight  drop-shadow-xl'>
            Hi, I&apos;m{' '}
            <span className='bg-gradient-purp bg-clip-text text-3xl font-semibold text-transparent'>
              Ayberk
            </span>
            <span className='text-[25px]'>👋🏻</span>
          </h1>
          <span className='text-md font-medium leading-tight md:text-xl'>
            I&apos;m a Frontend Developer & Designer
          </span>
        </div>
        <p className='text-sm font-light tracking-normal text-stone-500/80 dark:text-stone-300/60 md:text-sm'>
          Currently experimenting with AI-related technologies, building stuff that I find interesting and exploring new areas in software development.

          Feel free to reach me out through my links. ✌🏻
        </p>

        <p className='hidden bg-gradient-purp bg-clip-text text-sm font-semibold tracking-normal text-transparent dark:text-stone-300/60 md:flex md:text-sm'>
          Use keyboard shortcuts 1 → 6 to navigate between the pages.
        </p>
      </div>
    <LandingImage />
    </Card>
  );
}

export default Description;
