import React from 'react';
import { Button } from '@/components/ui/button';
import { CirclePlus, CirclePlusIcon } from 'lucide-react';

const BathroomCard = () => {
  return (
    <div className='flex justify-center items-center border p-4 m-4 shadow-lg rounded-lg h-100 w-100'>
      <Button
        className='cursor-pointer rounded-full bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center text-custom-color'
        variant='destructive'
        size='full'
      >
        <CirclePlusIcon />
        Bathroom Card
      </Button>
    </div>
  );
};

export default BathroomCard;
