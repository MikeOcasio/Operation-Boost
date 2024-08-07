import Link from 'next/link'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-white transition group-hover:fill-zinc-400" />
    </Link>
  )
}



export function Footer() {
  return (
    <footer className="z-10 flex h-16 w-full justify-between items-center bg-gradient-to-r from-Gold via-Plum to-Plum pr-8 py-6">
        <span>
        <div className="flex ml-12 gap-6">
          <h2 className='font-bold'>
            Follow Us
          </h2>
          <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
          <SocialLink
            href="#"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="#"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="#"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
        </span>
        <span>
        <a href="mailto:support@ravenboost.com"
        className='italic underline mr-12 text-white'>
        support@ravenboost.com
        </a>
        </span>
    </footer>
  )
}
