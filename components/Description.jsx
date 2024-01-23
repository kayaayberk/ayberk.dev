'use client';

function Description() {
  return (
    <>
      <h1 className='text-5xl font-bold'>
        Hi! <span className='text-4xl'>👋</span> <br /> I&apos;m{' '}
        <span className='bg-gradient-to-r from-[#A395F6] to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent'>
          Ayberk
        </span>
      </h1>
      <h2 className='text-2xl font-normal dark:text-card'>
        I&apos;m a{' '}
        <span className='font-semibold dark:text-white'>
          Software Developer
        </span>{' '}
        & <span className='font-semibold dark:text-white'>Designer.</span>
      </h2>
      <p className='font-light text-card dark:text-card'>
        I have been learning programming{' '}
        <span className='font-semibold dark:text-white'>fulltime</span> for the
        last 6 months. Currently working on a few projects, and seeking for
        opportunities. After graduating from a design school in Warsaw with
        solid experience in team work and thorough projects, I&apos;m ready to
        contribute to the porgramming era!
      </p>
    </>
  );
}

export default Description;
