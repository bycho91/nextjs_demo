import Hello from '@/components/Hello';
import Link from 'next/link';
import React from 'react';
import BathroomCard from '@/components/BathroomCard';
import CustomButton from '@/components/CustomButton';

const Home = async () => {
  const response = await fetch(
    'https://www.refugerestrooms.org/api/v1/restrooms'
  );
  const rooms = await response.json();
  console.log(rooms);

  return (
    <main>
      <div className='text-5xl underline'>Welcome to NEXTJS</div>
      <Hello />
      <div>
        <Link href='/dashboard/users'>Users</Link>
      </div>
      <BathroomCard />

      <CustomButton disabled={false} isRounded={true} />
    </main>
  );
};

export default Home;
