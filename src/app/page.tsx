'use client';
import Image from 'next/image';
import camping_at_night_image from '../../public/background_home_page.jpeg';
import adventure_path_image from '../../public/adventure_path.jpeg';
import online_experience_image from '../../public/online_experience.jpeg';
import { LocationFilter } from '@/components/home';

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
            <div className="flex gap-3 flex-col absolute top-[30%] left-[20%]">
              <p className="text-3xl font-semibold text-white">
                Adventure path for your trip
              </p>
              <button className="bg-white rounded-md px-2 py-1 w-fit text-xs">
                Experiences
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              className="rounded-md w-screen"
              src={online_experience_image}
              alt="online experience image"
              height={600}
            />
            <div className="flex gap-3 flex-col absolute top-[30%] left-[20%]">
              <p className="text-3xl font-semibold text-white">
                Things to do from home
              </p>
              <button className="bg-white rounded-md px-2 py-1 w-fit text-xs">
                Online Experiences
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
