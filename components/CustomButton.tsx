import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/button';

const CustomButton = ({
  disabled,
  isRounded,
}: {
  disabled: boolean;
  isRounded: boolean;
}) => {
  return (
    <Button
      className={cn(
        'text-sm',
        disabled ? 'bg-gray-300' : 'bg-blue-500',
        isRounded && 'rounded-full'
      )}
    >
      Click here
    </Button>
  );
};

export default CustomButton;
