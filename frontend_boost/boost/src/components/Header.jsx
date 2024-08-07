'use client'
import { Fragment, useEffect, useRef } from 'react';
import { IoGameControllerOutline } from "react-icons/io5";
import { GiSergeant } from "react-icons/gi";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { BiReceipt, BiSupport } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import ravenBoost from "@/images/ravenBoost.png";

const resources = [
  {
    name: 'Games',
    href: '#',
    icon: <IoGameControllerOutline size={32} />,
  },
  {
    name: 'Skillmasters',
    href: '#',
    icon: <GiSergeant size={32}/>,
  },
  {
    name: 'Boost',
    href: '#',
    icon: <HiOutlineBolt size={32}/>,
  },
  {
    name: 'Orders',
    href: '#',
    icon: <BiReceipt size={32}/>,
  },
  {
    name: 'Support',
    href: '#',
    icon: <BiSupport size={32}/>,
  },
];

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="inline-flex items-center gap-x-1 text-4xl text-white font-semibold leading-6">
        <IoMenu />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
        
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {resources.map((item) => (
                  <MobileNavItem key={item.name} href={item.href}>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-yellow-600/30">
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-inheri">
                        {item.icon}
                      </div>
                      <div>
                        <a href={item.href} className="font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function NavItem({ href, children }) {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <PopOver />
    </nav>
  );
}

function PopOver() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-5xl text-white font-semibold leading-6">
       <IoMenu />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 mt-2 text-white">
          <div className="max-w-fit flex-auto overflow-hidden rounded-xl bg-gradient-to-b from-Plum to-Gold text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-2">
              {resources.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-2 rounded-lg p-2 hover:bg-yellow-600/30"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center">
                  {item.icon}
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-lg">
                      {item.name}
                    </a>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

function clamp(number, a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export function Header() {
  let isHomePage = usePathname() === '/';

  let headerRef = useRef(null);
  let avatarRef = useRef(null);
  let isInitial = useRef(true);

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0;
    let upDelay = 64;

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value);
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property);
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return;
      }

      let { top, height } = headerRef.current.getBoundingClientRect();
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty('--header-position', 'sticky');
      }

      setProperty('--content-offset', `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`);
        setProperty('--header-mb', `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay);
        setProperty('--header-height', `${offset}px`);
        setProperty('--header-mb', `${height - offset}px`);
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`);
        setProperty('--header-mb', `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed');
        removeProperty('--header-top');
        removeProperty('--avatar-top');
      } else {
        removeProperty('--header-inner-position');
        setProperty('--header-top', '0px');
        setProperty('--avatar-top', '0px');
      }
    }

    function updateStyles() {
      updateHeaderStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener('scroll', updateStyles, { passive: true });
    window.addEventListener('resize', updateStyles);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, [isHomePage]);

  return (
    <>
      <header className="pointer-events-none fixed w-full z-50 flex flex-none flex-col">
        {isHomePage && <div className="order-last" />}
        <div
          ref={headerRef}
          className="z-10 flex h-16 w-full justify-between items-center bg-gradient-to-r from-Plum via-Plum to-Gold pr-8 py-6"
          style={{
            position: 'var(--header-position)',
          }}
        >
          <div className="flex items-center">
            <Image
              src={ravenBoost}
              height={50}
              width={50}
              alt="app logo"
              className="ml-4"
            />
          </div>
          {/* <div className="flex justify-end">
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div> */}
        </div>
      </header>
    </>
  );
}
