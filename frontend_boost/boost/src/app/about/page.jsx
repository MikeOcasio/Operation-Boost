

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: '',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            We're all about catering to our customers and meeting their unique
            needs.
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              We offer a variety of options for you to choose from, so you can
              find the perfect fit for your gaming goals. Whether you're looking
              for a specific service, a particular game, or a specific
              play-style, we've got you covered.
            </p>
            <p>
              Both our boosters and customers have their own profiles. Once you
              place an order and your chosen booster activates it, you'll be
              able to track the progress. This way, you'll know exactly when the
              boosting process is in motion
            </p>
            <p>
              At Raven Boost, both our boosters and customers have their own
              profiles. Once you place an order and your chosen booster
              activates it, you'll be able to track the progress. This way,
              you'll know exactly when the boosting process is in motion.
            </p>
            <p>
              Once it's completed, you'll have the opportunity to view the
              finished product before giving your approval. This extra step
              ensures that both the booster and the customer are protected and
              guarantees satisfaction before marking the order as completed.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-uppercase text-zinc-800 sm:text-3xl dark:text-zinc-100">
            {String('About Us').toUpperCase()}
          </h2>
          <Container className="mb-10">
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                We're all about catering to our customers and meeting their
                unique needs. We offer a variety of options for you to choose
                from, so you can find the perfect fit for your gaming goals.
                Whether you're looking for a specific service, a particular
                game, or a specific play-style, we've got you covered.
              </p>
              <p>
                Both our boosters and customers have their own profiles. Once
                you place an order and your chosen booster activates it, you'll
                be able to track the progress. This way, you'll know exactly
                when the boosting process is in motion
              </p>
            </div>
          </Container>
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
