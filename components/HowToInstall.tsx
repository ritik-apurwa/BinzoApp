
import React from 'react';
import Image from 'next/image';
import { howToInsallSteps } from '@/data';
import BannerCard from './BannerCard';

const HowToInstall = () => {
  return (
   <section className='flex flex-col gap-10'>
    <div className='h-10 relative'>
    <BannerCard title='How to Install' />
    </div>
     <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {howToInsallSteps.map((item) => {
        const { description, id, imageUrl, title } = item;
        return (
          <div key={id} className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="relative h-[800px] overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        );
      })}
    </section>
   </section>
  );
};

export default HowToInstall;
