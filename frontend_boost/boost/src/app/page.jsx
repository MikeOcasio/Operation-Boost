'use client'

import Image from 'next/image'
import clsx from 'clsx'
import image1 from '@/images/photos/RB_DESTINY_HUNTER1 1.png'
import image2 from '@/images/photos/Ghost-2.png'
import image3 from '@/images/photos/RB_Apex_WRAITH_2 1.png'
import APEX from '@/images/APEX.webp'
import { useState } from 'react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import burningCity from '@/images/burningCity.png'
import { purpleLane } from '@/images/purpleLane.png'
import HomePageAboutArea from '@/components/HomePageAboutArea'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Photos() {
  return (
    <div className="mt-[64px]; relative z-30 mt-12 h-[30dvh] sm:mt-20">
      <div className="h-100 flex justify-center gap-0 overflow-hidden sm:gap-0">
        {[image1, image3, image2].map((image) => (
          <div
            key={image.src}
            className={clsx(
              'dark:group-hover relative aspect-[9/10] w-44 flex-none overflow-hidden sm:w-72 dark:bg-transparent',
            )}
          >
            <Image
              src={image}
              alt="group of people playing video games"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const pricing = {
    frequencies: [
      { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
      { value: 'annually', label: 'Annually', priceSuffix: '/year' },
    ],
    tiers: [
      {
        name: 'Coming Soon',
        id: 'tier-freelancer',
        href: '#',
        price: { monthly: '$15', annually: '$144' },
        description: 'The essentials to provide your best work for clients.',
        features: ['..', '..', '...', '..'],
        mostPopular: false,
      },
      {
        name: 'Apex Legends',
        id: 'tier-startup',
        href: '#',
        price: { monthly: '$30', annually: '$288' },
        description: 'Dominate the Destiny 2 Universe',
        features: [
          'Custom boosting services for leveling',
          'Raid Completions',
          'Exotic Quests Assistance',
          'PVP Glory Ranks Boost',
        ],
        mostPopular: true,
        picture: APEX,
      },
      {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '$48', annually: '$576' },
        description: 'Dedicated support and infrastructure for your company.',
        features: ['..', '..', '...', '..'],
        mostPopular: false,
      },
    ],
  }
  const [frequency, setFrequency] = useState(pricing.frequencies[0])
  return (
    <>
      <Image
        src={burningCity}
        alt="background-picture"
        style={{
          objectFit: 'cover',
          zIndex: '0',
          height: '100%',
          width: '100%',
          position: 'absolute',
          opacity: '0.5',
        }}
        quality={100}
      />
      <div>
        <h1 className="flex center text-9xl font-extrabold">
          operation Boost
        </h1>
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 pb-2 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative ${classNames(
                tier.mostPopular
                  ? 'ring-2 ring-indigo-500'
                  : 'ring-1 ring-white/10',
                `rounded-3xl p-8 xl:p-10 shadow-inner drop-shadow-xl`,
              )}`}
            >
              <Image
                src={tier.picture}
                alt="background-picture"
                sizes="100vw"
                style={{ objectFit: 'cover', zIndex: '-1', opacity: '1' }}
                quality={100}
                fill
                className="rounded-3xl backdrop-brightness-125 backdrop-contrast-125 backdrop-saturate-125"
              />
              <div className="flex items-center justify-between gap-x-4">
                <h1
                  id={tier.id}
                  className="text-4xl font-extrabold leading-9 text-white"
                >
                  {tier.name}
                </h1>
              </div>
              <p className="text-lg font-medium leading-6 text-gray-300">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                )}
              >
                Boost Now
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Photos />
        <ContactSection className="relative z-10" />
      </div>
    </>
  )
}

function ContactSection() {
  const [agreed, setAgreed] = useState(false)

  return (
    <>
      <div className="relative mx-auto max-w-7xl px-6  sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="pt-5 font-bold leading-7 text-indigo-400">
            Boost Your Game, Your Way! Choose your dream team and leave the rest
            to us.
          </h1>
        </div>
      </div>

      <HomePageAboutArea />

      <div className="bg-RussianViolet isolate px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden text-white blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
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
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
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
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
