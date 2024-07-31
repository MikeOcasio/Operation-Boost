import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid';
import boostSvg from '@/images/containers/boostButton.svg';


const GameCard = ({ game }) => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div
      key={game.id}
      className={`relative ${classNames(
        game.mostPopular
          ? 'ring-2 ring-indigo-500'
          : 'ring-1 ring-white/10',
        `rounded-3xl bg-CardPlum p-8 sm:w-[287px] shadow-inner drop-shadow-xl xl:p-10 pb-20 relative`,
      )}`}
    >
      <div className="flex items-center justify-between h-[150px] gap-x-4">
        <Image
          src={game.image}
          alt={game.altText}
          quality={100}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <p className="text-md text-center font-bold leading-6 py-4 text-white italic">
        {game.tagLine}
      </p>
      <ul
        role="list"
        className="mb-8 pb-4 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
      >
        {game.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              className="h-6 w-5 flex-none text-white"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.location.href = game.href}
        aria-describedby={game.id}
        aria-label='Boost Button'
        title='Boost Button'
        className='bg-boostButton bg-contain bg-no-repeat bg-center overflow-visible h-10 max-w-48 block px-3 py-2 absolute left-0 right-0 bottom-6 mx-auto transition-transform duration-300 hover:scale-110'
      />
    </div>
  );
}

export default GameCard;