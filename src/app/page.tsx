import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import camping_at_night_image from '../../public/background_home_page.jpeg';
import adventure_path_image from '../../public/adventure_path.jpeg';
import online_experience_image from '../../public/online_experience.jpeg';

const LocationFilter = () => {
  return (
    <section className="flex gap-16 bg-white rounded-3xl shadow-inner px-5 py-3 translate-y-7 z-30">
      <div className="flex flex-col">
        <label htmlFor="location" className="text-xs font-bold">
          Location
        </label>
        <input
          id="location"
          name="location"
          className={clsx(
            // 'focus:text-neutral-900 focus:bg-neutral-150',
            // 'disabled:text-neutral-900 disabled:bg-neutral-150',
            // 'hover:text-neutral-900 hover:bg-neutral-150',
            'border-0 outline-none rounded-md bg-neutral-150 text-sm',
            'placeholder:text-neutral-900'
          )}
          placeholder="Where are you going?"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="checkIn" className="text-xs font-bold">
          Check in
        </label>
        <input
          id="checkIn"
          name="checkIn"
          className={clsx(
            'border-0 outline-none rounded-md bg-neutral-150 text-sm',
            'placeholder:text-neutral-900'
          )}
          placeholder="Pick date"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="checkOut" className="text-xs font-bold">
          Check out
        </label>
        <input
          id="checkOut"
          name="checkOut"
          className={clsx(
            'border-0 outline-none rounded-md bg-neutral-150 text-sm',
            'placeholder:text-neutral-900'
          )}
          placeholder="Pick date"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="guests" className="text-xs font-bold">
          Guests
        </label>
        <input
          id="guests"
          name="guests"
          className={clsx(
            'border-0 outline-none rounded-md bg-neutral-150 text-sm',
            'placeholder:text-neutral-900'
          )}
          placeholder="Add guests"
        />
      </div>
      <button className="rounded-3xl px-3 bg-primary-500">
        <MagnifyingGlassIcon className="w-4 h-4 text-white" />
      </button>
    </section>
  );
};

const SignatureExcellenceCard = ({
  image,
  label,
  desc,
}: {
  image: string;
  label: string;
  desc: string;
}) => {
  return (
    <div className="relative max-h-[400px] h-[400px] gap-3 flex flex-col bg-white">
      <Image
        className="rounded-xl object-cover min-h-[300px]"
        src={image}
        alt="Image Description"
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
      />
      <div className="ml-3">
        <div className="text-2xl font-bold">{label}</div>
        <div className="text-neutral-500">{desc}</div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-white flex flex-col min-h-screen px-[132px] my-10">
      <div className="mt-12 mb-14">
        <div className="flex justify-center">
          <LocationFilter />
        </div>
        <section className="relative">
          <Image
            className="rounded-md min-w-full"
            src={camping_at_night_image}
            alt="travel image"
          />
          <p className="text-3xl font-semibold absolute top-[50%] left-[35%] text-white">
            Awaken to a different world
          </p>
        </section>
      </div>
      <section className="flex flex-col gap-3 mb-14">
        <p className="font-medium text-2xl">A SIGNATURE OF EXCELLENCE</p>
        <div className="grid gap-2 grid-cols-4">
          <SignatureExcellenceCard
            label="New York"
            desc="2,345 properties - 746 miles away"
            image="https://i.pinimg.com/564x/62/56/7a/62567ad90a25c17b5baa70d243137310.jpg"
          />
          <SignatureExcellenceCard
            label="Maldives"
            desc="2,345 properties - 746 miles away"
            image="https://i.pinimg.com/564x/ad/37/05/ad370511d29ac73fc9b0d9330deeb4d4.jpg"
          />
          <SignatureExcellenceCard
            label="Bhutan"
            desc="2,345 properties - 746 miles away"
            image="https://i.pinimg.com/564x/4d/e0/a8/4de0a8accf9ce66f009c1ab2ff3f0793.jpg"
          />
          <SignatureExcellenceCard
            label="Amsterdam"
            desc="2,345 properties - 746 miles away"
            image="https://i.pinimg.com/564x/60/31/35/60313560814419689a5851deea8c87e8.jpg"
          />
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <p className="font-medium text-2xl">FIND NEW POSSIBILITY</p>
        <div className="flex gap-3 w-full">
          <div className="relative">
            <Image
              className="rounded-md w-screen"
              src={adventure_path_image}
              alt="adventure path"
              height={600}
            />
            <p className="text-3xl font-semibold absolute top-[30%] left-[20%] text-white">
              Adventure path for your trip
            </p>
          </div>
          <div className="relative">
            <Image
              className="rounded-md w-screen"
              src={online_experience_image}
              alt="online experience image"
              height={600}
            />
            <p className="text-3xl font-semibold absolute top-[30%] left-[20%] text-white">
              Things to do from home
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
