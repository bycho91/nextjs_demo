import Hello from '@/components/Hello';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <main>
      <div className='text-5xl underline'>Welcome to NEXTJS</div>
      <Hello />
      <div>
        <Link href='/dashboard/users'>Users</Link>
      </div>
    </main>
  );
};

export default Home;
