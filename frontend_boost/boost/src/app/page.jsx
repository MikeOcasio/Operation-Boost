'use client'

import Image from 'next/image'
import clsx from 'clsx'
import image1 from '@/images/characters.png'
import image2 from '@/images/photos/Ghost-2.png'
import image3 from '@/images/photos/RB_Apex_WRAITH_2 1.png'
import APEX from '@/images/photos/apexLogo.png'
import DESTINY from '@/images/photos/destinyLogo.png'
import COD from '@/images/photos/codLogo.png'
import { useState } from 'react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import burningCity from '@/images/burningCity.png'
import purpleLane from '@/images/purpleLane.png'
import HomePageAboutArea from '@/components/HomePageAboutArea'
import GameCard from '@/components/GameCard'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const games = [
    {
      name: 'Destiny 2',
      id: 'game-destiny-2',
      href: '#',
      tagLine: 'Dominate the Destiny 2 Universe',
      description: 'Mention the custom boosting services for leveling, raid completions, and exotic quests with the assistance of experienced players.',
      features: [
        'Custom boosting services for leveling',
        'Raid completions',
        'Exotic quests assistance',
        'PVP Glory ranks boost',
      ],
      image: DESTINY,
      altText: 'logo for Destiny 2'
    },
    {
      name: 'Apex Legends',
      id: 'game-apex-legends',
      href: '#',
      mostPopular: true,
      tagLine: 'Elevate Your Apex Legends Experience',
      description: 'Highlight the opportunity to boost rankings, improve kill/death ratios (K/D), and level up faster with the help of top-tier players.',
      features: [
        'Custom boosting services for leveling',
        'Rank boosting',
        'Kill/death ratio improvement',
        'Level up faster',
      ],
      image: APEX,
      altText: 'logo for Apex Legends'
    },
    {
      name: 'Call of Duty',
      id: 'game-call-of-duty',
      href: '#',
      tagLine: 'Achieve Call of Duty Supremacy',
      description: 'Focus on the boost services for multiplayer and Warzone, including rank boosting, weapon leveling, and unlocking achievements.',
      features: [
        'Custom boosting services for multiplayer and Warzone',
        'Rank boosting',
        'Weapon leveling',
        'Achievement unlocking',
      ],
      image: COD,
      altText: 'logo for Call of Duty'
    },
  ];

  return (
    <>
      <div className='mt-8'>
        <div
          style={{
            position: 'fixed',
            top: '0',
            zIndex: '-10',
            height: '100dvh',
          }}
        >
          <Image
            src={purpleLane}
            alt="background-picture"
            quality={100}
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%',
              opacity: '0.6',
            }}
            className="backdrop-contrast-125"
          />
        </div>
        <h1 className="center flex justify-center text-5xl tracking-widest font-extrabold pt-20">
          RavenBoost
        </h1>
        <div className="h-100 flex justify-center gap-0 relative sm:gap-0">
          <Image
            src={image1}
            height={500}
            alt="group of video game characters"
            className=""
            quality={100}
          />
        </div>
        <p className="relative z-10 flex justify-center max-w-[80%] mx-auto text-center pt-8 text-2xl font-medium leading-6 text-gray-300 italic">
          Boost Your Game, Your Way! Choose your dream team and leave the rest to us.
        </p>
        <div
          style={{
            position: 'sticky',
            marginTop: '5rem',
            top: '0',
            zIndex: '-10',
            height: '100vh',
          }}
        >
          <Image
            src={burningCity}
            alt="background-picture"
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%',
              opacity: '0.9',
            }}
            quality={100}
          />
        </div>
        <div className="isolate justify-items-center mx-auto grid gap-8 max-w-md grid-cols-1 lg:mx-auto lg:max-w-5xl lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <HomePageAboutArea />
        <ContactSection className="relative z-10" />
      </div>
    </>
  )
}

function ContactSection() {
  const [agreed, setAgreed] = useState(false)

  return (
    <>
      <div className="px-6 sm:py-32 lg:px-8 max-w-3xl mx-auto relative">
      <div className='bg-skillsMaster bg-contain bg-no-repeat absolute right-0 h-36 w-64'>
        <h1 className="pr-16 text-right pt-2 font-bold tracking-tight text-3xl">
          Contact Us
        </h1>
        </div>
        <div className="pt-28 mx-auto max-w-2xl text-center">
    
          <p className="mt-8 text-lg leading-8 rounded-3xl bg-CardPlum p-6 shadow-inner drop-shadow-xl relative">
          Got questions, need assistance, or want to share your feedback? We're all ears! At Raven Boost, your gaming experience and satisfaction are our top priorities. Use the options below to get in touch with us, and we'll make sure to address your needs as swiftly as possible.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20 bg-gradient-to-r from-CardPlum to-CardGold rounded-lg shadow-lg p-6"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="order-number"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Order #
              </label>
              <div className="relative mt-2.5">
                <input
                  type="number"
                  name="order-number"
                  id="order-number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-white">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-Gold">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-full bg-Gold px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
        </div>
    </>
  )
}
