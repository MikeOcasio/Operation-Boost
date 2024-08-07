import {
  CheckBadgeIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'
import { GiProgression } from "react-icons/gi";
import { MdAssignment } from "react-icons/md";
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import controllers from '@/images/photos/controllers.png'
import trunk from '@/images/trunk.png'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const people = [
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jordan Smith',
    role: 'Strategist',
    imageUrl:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alex Johnson',
    role: 'Gamer',
    imageUrl:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jamie Lee',
    role: 'Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
]

const faqs = [
  {
    question:
      'Is my personal information and gaming account information safe with you?',
    answer:
      "Yes, your information is safe. We prioritize security and confidentiality for all our customers.",
  },
  {
    question: 'Do I need to share my gaming account login details with you?',
    answer:
      "Yes, but rest assured your details are kept secure and are only used for the duration of the service.",
  },
  {
    question: 'What if I have questions or concerns about my order?',
    answer:
      "You can contact our support team anytime. We're here to help with any questions or concerns you might have.",
  },
  {
    question: 'What is your refund policy?',
    answer:
      "We offer a satisfaction guarantee. If you're not happy with our service, contact us for a resolution.",
  },
]

const steps = [
  {
    title: "Create Profile",
    description: "Sign up and create your profile to get started.",
    icon: <UserPlusIcon className="h-10 w-10 text-indigo-400" />,
  },
  {
    title: "Place Order",
    description: "Choose the service you need and place an order.",
    icon: <ShoppingBagIcon className="h-10 w-10 text-Plum" />,
  },
  {
    title: "Booster Assigned",
    description: "A booster is assigned to your order and starts the process.",
    icon: <MdAssignment className="h-10 w-10 text-indigo-400" />,
  },
  {
    title: "Track Progress",
    description: "Monitor the progress of your order through your profile.",
    icon: <GiProgression className="h-10 w-10 text-Plum" />,
  },
  {
    title: "Review and Approve",
    description: "Once completed, review the results and approve.",
    icon: <ShieldCheckIcon className="h-10 w-10 text-indigo-400" />,
  },
]

export default function HomePageAboutArea() {
  return (
    <div className="px-6 py-16 lg:px-8 max-w-3xl mx-auto">
      <div className="mx-auto text-base leading-7">
        <div className='flex justify-end mt-32'>
          <Image
            src={controllers}
            alt="shiny purple and gold controllers with keyboard"
            quality={100}
            style={{
              transform: 'rotate(17deg)',
              width: '50%',
              height: 'auto',
            }}
          />
        </div>
        <div className='mt-4 bg-howItWorks bg-contain bg-no-repeat h-16 w-64'>
        <h1 className="pl-12 pt-2 font-bold tracking-tight text-3xl">
          How It Works
        </h1>
        </div>
        <div className="mt-16">
          {steps.map((step, index) => (
            <div key={step.title} className={`rounded-3xl flex items-center mb-8 px-8 py-2 shadow-inner drop-shadow-xl relative ${index % 2 === 0 ? 'flex-row bg-CardPlum' : 'flex-row-reverse bg-CardGold'}`} style={{ width: 'fit-content', maxWidth: '80%', marginLeft: index % 2 === 0 ? '0' : 'auto', marginRight: index % 2 === 0 ? 'auto' : '0' }}>
              <div className="flex items-center">
                {step.icon}
              </div>
              <div className="flex flex-col mx-4">
                <h4 className="text-lg mb-2 font-semibold">{step.title}</h4>
                <p className="text-sm text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='text-right mt-36 max-w-3xl mx-auto relative'>
        <div className='bg-skillsMaster bg-contain bg-no-repeat absolute right-0 h-36 w-64'>
        <h1 className="pr-12 pt-2 font-bold tracking-tight text-3xl">
          Skill Masters
        </h1>
        </div>
          <ul
            role="list"
            className="mx-auto pt-36 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col items-center">
                <img
                  className="h-56 w-56 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight ">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 ">{person.role}</p>
              </li>
            ))}
          </ul>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            {/* <blockquote className="font-semibold ">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”
              </p>
            </blockquote> */}
          </figure>
        </div>
        <div className="mt-36 lg:mx-auto lg:max-w-5xl">
        <div className='mt-4 bg-howItWorks bg-contain bg-no-repeat h-16 w-56'>
        <h1 className="pl-20 pt-2 font-bold tracking-tight text-3xl">
          FAQ
        </h1>
        </div>
        <div className='flex justify-between gap-6 items-center'>
          <p className='rounded-3xl bg-CardGold p-6 mt-16 shadow-inner drop-shadow-xl'>
            Discover answers to your questions about our services for PC, Xbox, and PlayStation gamers. Explore customization options, pricing, and our commitment to safety. We're here to enhance your gaming experience.
          </p>
          <Image
            src={trunk}
            alt="shiny purple and gold controllers with keyboard"
            quality={100}
            style={{
              width: '30%',
              height: 'auto',
            }}
          />
        </div>
          <div className="mx-auto max-w-4xl divide-y-2 ">
            <dl className="mt-2 space-y-2">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-4">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left rounded-2xl bg-CardPlum p-4 shadow-inner drop-shadow-xl">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 rounded-2xl bg-CardGold p-4 shadow-inner drop-shadow-xl">
                        <p className="text-base font-semibold leading-7 text-black">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
