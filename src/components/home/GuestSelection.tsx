'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const GuestSelection = () => {
  const [open, setOpen] = useState(false);
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  const handleIncreaseCustomers =
    (setState: Dispatch<SetStateAction<number>>) => () => {
      setState((prev) => prev + 1);
    };

  const handleDecreaseCustomers =
    (setState: Dispatch<SetStateAction<number>>) => () => {
      setState((prev) => {
        console.log('prev: ', prev);
        if (prev === 0) {
          return prev;
        }
        return prev - 1;
      });
    };

  const onClickFinishSelection = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <PopoverTrigger className="text-xs font-bold">Guests</PopoverTrigger>
      <PopoverTrigger className="border-0 outline-none rounded-md bg-neutral-150 text-sm">
        {numberOfAdults} adults - {numberOfChildren} children
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="font-medium text-sm">Adults</div>
          <div className="flex items-center border-black rounded-sm">
            <Button
              variant="ghost"
              disabled={numberOfAdults === 0}
              onClick={handleDecreaseCustomers(setNumberOfAdults)}
            >
              -
            </Button>
            <div>{numberOfAdults}</div>
            <Button
              variant="ghost"
              onClick={handleIncreaseCustomers(setNumberOfAdults)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-medium text-sm">Children</div>
          <div className="flex items-center border-black rounded-sm">
            <Button
              variant="ghost"
              disabled={numberOfChildren === 0}
              onClick={handleDecreaseCustomers(setNumberOfChildren)}
            >
              -
            </Button>
            <div>{numberOfChildren}</div>
            <Button
              variant="ghost"
              onClick={handleIncreaseCustomers(setNumberOfChildren)}
            >
              +
            </Button>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={onClickFinishSelection}
        >
          Done
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default GuestSelection;