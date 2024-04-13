'use client'
import Image from 'next/image'
import clsx from 'clsx'
import image1 from '@/images/photos/RB_DESTINY_HUNTER1 1.png'
import image2 from '@/images/photos/Ghost-2.png'
import image3 from '@/images/photos/RB_Apex_WRAITH_2 1.png'
import { useEffect } from 'react';
import axios from 'axios';

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[image1, image3, image2].map((image) => (
          <div
            key={image.src}
            className={clsx(
              'dark:group-hover relative aspect-[9/10] w-44 flex-none  overflow-hidden bg-zinc-100  sm:w-72 dark:bg-transparent',
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}



export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login';
      return;
    }

    axios.get('http://localhost:3000/api/current_user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // console.log(response.data);
    })
    .catch(error => {
      console.error(error);
      localStorage.removeItem('token');
      window.location.href = '/login';
    });
  }, []); 

  return (
    <>
      <Photos />
    </>
  );
}