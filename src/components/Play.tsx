import { APP_NAME } from '@/constants'
import Wrap from './Wrap'

interface Card {
  link: string
  heading: string
  description: string
  width: string
}

const cards = [
  {
    link: './images/cards/reason-img-1.png',
    heading: 'Earn real cash',
    description: 'Play fun games to win',
    width: 'big',
  },
  {
    link: './images/cards/reason-img-2.png',
    heading: '5 Cr+ Real Players',
    description: 'No bots in games',
    width: 'small',
  },
  {
    link: './images/cards/reason-img-3.png',
    heading: '1 Referral = ₹1,000',
    description: 'Refer friends to earn',
    width: 'small',
  },
  {
    link: './images/cards/reason-img-4.png',
    heading: 'Instant Withdrawals',
    description: 'Directly to your bank account',
    width: 'big',
  },
  {
    link: './images/cards/reason-img-7.png',
    heading: 'Big Tournaments',
    description: 'Zero entry fee',
    width: 'small',
  },
  {
    link: './images/cards/reason-img-6.png',
    heading: '24x7 Support',
    description: 'Our team is at service',
    width: 'small',
  },
]

export default function Play() {
  return (
    <Wrap>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='text-center'>
          <p className='heading'>REASONS TO</p>
          <p className='sub-heading'>Play on {APP_NAME}</p>
          <p className='body-content'>
            Here are some of the reasons why users love to play on the {APP_NAME} money game app. Check out why players love
            playing online cash games on {APP_NAME} money game app.
          </p>
        </div>
        <div className='flex flex-wrap'>
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </Wrap>
  )
}

function Card({ card }: { card: Card }) {
  return (
    <div
      className={
        card.width === 'big' ? 'w-full p-2 md:w-2/3 xl:p-4 2xl:xl:w-1/2' : 'w-1/2 p-2 md:w-1/3 xl:p-4 2xl:w-1/4'
      }
    >
      <div className='flex flex-col gap-6 rounded-3xl border border-white/20 bg-bg2 p-4 text-white sm:rounded-[3rem] sm:p-8'>
        <div className='pt-2 sm:pt-4'>
          <div className='text-base font-bold text-green-500 sm:text-xl xl:text-3xl'>{card.heading}</div>
          <div className='text-sm font-light text-white/50 sm:text-sm lg:text-lg'>{card.description}</div>
        </div>
        <div>
          <img src={card.link} alt='' className='rounded-3xl' />
        </div>
      </div>
    </div>
  )
}
