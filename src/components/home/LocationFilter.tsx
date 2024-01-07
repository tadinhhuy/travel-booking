'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/datepicker';

import { GuestSelection } from '@/components/home';

const LocationFilter = () => {
  const [openCheckInDate, setOpenCheckInDate] = useState(false);

  return (
    <section className="grid grid-flow-col gap-16 bg-white rounded-3xl shadow-inner px-5 py-3 translate-y-10 z-30">
      <div className="flex flex-col">
        <label htmlFor="location" className="text-xs font-bold">
          Location
        </label>
        <input
          id="location"
          name="location"
          className={clsx(
            'border-0 outline-none rounded-md bg-neutral-150 text-sm',
            'placeholder:text-neutral-900'
          )}
          placeholder="Where are you going?"
        />
      </div>
      <div className="flex flex-col">
        <div
          className="text-xs font-bold"
          onClick={() => setOpenCheckInDate(true)}
        >
          Check in & Check out
        </div>
        <div className="">
          <DatePickerWithRange icon={<></>} />
        </div>
      </div>
      <div className="flex flex-col">
        <GuestSelection />
      </div>
      <div>
        <Button className="rounded-3xl px-3 bg-primary-500">
          <MagnifyingGlassIcon className="w-4 h-4 text-white" />
        </Button>
      </div>
    </section>
  );
};

export default LocationFilter;
