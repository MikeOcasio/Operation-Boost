import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'
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
]

const faqs = [
  {
    question:
      'Is my personal information and gaming account information safe with you?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Do I need to share my gaming account login details with you?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'What if I have questions or concerns about my order?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'What is your refund policy?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

export default function HomePageAboutArea() {
  return (
    <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          About Us
        </h1>
        <p className="mt-6 text-xl leading-8">
          We're all about catering to our customers and meeting their unique
          needs. We offer a variety of options for you to choose from, so you
          can find the perfect fit for your gaming goals. Whether you're looking
          for a specific service, a particular game, or a specific play-style,
          we've got you covered.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Both our boosters and customers have their own profiles. Once you
            place an order and your chosen booster activates it, you'll be able
            to track the progress. This way, you'll know exactly when the
            boosting process is in motion
          </p>
          <h3 className="mt-2 text-lg font-bold"> How it Works</h3>
          <ul role="list" className="mt-8 max-w-xl space-y-8 ">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold ">Profiles:</strong> At Raven
                Boost, both our boosters and customers have their own profiles.
                Once you place an order and your chosen booster activates it,
                you'll be able to track the progress. This way, you'll know
                exactly when the boosting process is in motion.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold ">Approval</strong> Once it's
                completed, you'll have the opportunity to view the finished
                product before giving your approval. This extra step ensures
                that both the booster and the customer are protected and
                guarantees satisfaction before marking the order as completed.
              </span>
            </li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight ">
            SKILSS MASTER
          </h2>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-56 w-56 rounded-full"
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
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
                purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
                aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                enim tristique.”
              </p>
            </blockquote> */}
          </figure>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight ">FAQ</h2>
          <p className="mt-6">
            Discover answers to your questions about our services for PC, Xbox,
            and PlayStation gamers. Explore customization options, pricing, and
            our commitment to safety. We're here to enhance your gaming
            experience.
          </p>
          <div className="mx-auto max-w-4xl divide-y">
            <dl className="mt-10 space-y-6 divide-y">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left ">
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
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 ">{faq.answer}</p>
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
