import { APP_NAME } from '@/constants'
import Wrap from './Wrap'
import { link } from 'fs'

const socialMedia = [
  './images/social-media/Facebook.png',
  './images/social-media/Instagram.png',
  './images/social-media/Telegram.png',
  './images/social-media/Youtube.png',
  './images/social-media/Twitter.png',
]

const games = [
  {
    type: 'Card Games',
    games: [
      {
        game: 'Call Break',
        link: '#',
      },
      {
        game: 'Tezz Patti',
        link: '#',
      },
    ],
    link: '#',
  },
  {
    type: 'Casual Games',
    // games: ['Carrom', 'Ludo', 'Quizzy', 'Snakes & Ladders'],
    games: [
      {
        game: 'Carrom',
        link: '#',
      },
      {
        game: 'Ludo',
        link: '#',
      },
      {
        game: 'Quizzy',
        link: '#',
      },
      {
        game: 'Snakes & Ladders',
        link: '#',
      },
    ],
    link: '#',
  },
  {
    type: 'Arcade Games',
    // games: ['Fruit Fight', 'Brick Smash', 'Knife Master'],
    games: [
      {
        game: 'Fruit Fight',
        link: '#',
      },
      {
        game: 'Brick Smash',
        link: '#',
      },
      {
        game: 'Knife Master',
        link: '#',
      },
    ],
    link: '#',
  },
  {
    type: 'Sports Games',
    // games: ['Archery', 'Football', 'Golf'],
    games: [
      {
        game: 'Archery',
        link: '#',
      },
      {
        game: 'Football',
        link: '#',
      },
      {
        game: 'Golf',
        link: '#',
      },
    ],
    link: '#',
  },
  {
    type: 'Board Games',
    // games: ['Carrom', 'Ludo'],
    games: [
      {
        game: 'Carrom',
        link: '#',
      },
      {
        game: 'Ludo',
        link: '#',
      },
    ],
    link: '#',
  },
  {
    type: 'Cue Sports',
    // games: ['Pool'],
    games: [
      {
        game: 'Pool',
        link: '#',
      },
    ],
    link: '#',
  },
  {
    type: 'Fantasy Games',
    // games: ['Fantasy Cricket'],
    games: [
      {
        game: 'Fantasy Cricket',
        link: '#',
      },
    ],
    link: '#',
  },
]

// Blog
// Privacy Policy
// FairPlay Policy
// Responsible Gaming Policy
// FAQ’s
// Terms & Conditions
// Bug Bounty Program
// Sitemap

const footerLinks = [
  {
    type: 'Blog',
    link: '#',
  },
  {
    type: 'Privacy Policy',
    link: '#',
  },
  {
    type: 'FairPlay Policy',
    link: '#',
  },
  {
    type: 'Responsible Gaming Policy',
    link: '#',
  },
  {
    type: "FAQ's",
    link: '#',
  },
  {
    type: 'Terms & Conditions',
    link: '#',
  },
  {
    type: 'Bug Bounty Program',
    link: '#',
  },
  {
    type: 'Sitemap',
    link: '#',
  },
]

export default function Footer() {
  return (
    <Wrap>
      <div className='flex flex-col gap-10 md:gap-20'>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <div className='text-center text-sm text-white text-white/70'>
          Ⓒ 2024 HIKE PRIVATE LIMITED. All Rights Reserved.
        </div>
      </div>
    </Wrap>
  )
}

function Part1() {
  return (
    <div className='grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2'>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center justify-center md:block'>
          <img src='./icon.png' alt='icon' className='w-24' />
        </div>
        <div className='text-justify text-sm text-white/50'>
          {APP_NAME} is an online gaming platform where the competitive spirit of India comes alive. Play AAA Rated
          games like Carrom, Ludo, Call Break & more against each other in skill-games and win real money.
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='md:hidden'>
          <p className='heading'>Connect &</p>
          <p className='sub-heading'>Follow us on</p>
        </div>

        <div className='flex items-center justify-center gap-3 md:justify-end'>
          {socialMedia.map((media, index) => (
            <img key={index} src={media} alt='media' className='aspect-square w-[10%] md:w-11' />
          ))}
        </div>
      </div>
    </div>
  )
}

function Part2() {
  return (
    <div className='grid grid-cols-2 justify-between gap-6 text-sm lg:flex'>
      {games.map((game, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <a href='' className='text-white/65'>
            {game.type}
          </a>
          <div className='flex flex-col gap-2'>
            {game.games.map((game, index) => (
              <a href={game.link} key={index} className='font-semibold text-white'>
                {game.game}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Part3() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 text-white md:gap-5'>
      <div className='flex w-full items-center justify-center border-t border-white/10 py-5 md:border-none'>
        <img src='./images/footer-icons.svg' alt='' className='hidden md:block' />
        <img src='./images/Group 23575.png' alt='' className='w-1/2 md:hidden' />
      </div>
      <div className='text-center text-sm text-white/65'>
        {APP_NAME} by Hike is only for people above 18 years of age in states of India where permissible by extant law.
        The games involve an element of financial risk and may be habit forming. Please play responsibly at your own
        risk. T&Cs Apply.
      </div>
    </div>
  )
}

function Part4() {
  return (
    <div>
      <div className='grid grid-cols-2 items-center justify-between gap-2 text-sm lg:flex lg:gap-0'>
        {footerLinks.map((link, index) => (
          <a href={link.link} key={index} className='text-white/65'>
            {link.type}
          </a>
        ))}
      </div>
    </div>
  )
}
