import { APP_NAME } from '@/constants'
import Wrap from './Wrap'
import SwiperCore from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Review {
  review: string
  name: string
  won: string
  location: string
  profile: string
}

const reviews = [
  {
    review:
      'I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.',
    name: 'Vishal Gupta',
    won: '₹3,12,856',
    location: 'Bhadohi, Uttar Pradesh',
    profile: './images/users/user-1.png',
  },
  {
    review:
      `I earned over ₹50,000 in ${APP_NAME} App. It has an easy-to-use interface that motivates you to play more and earn big!`,
    name: 'Devashish Tomar',
    won: '₹54,325',
    location: 'Dehradun, Uttarakhand',
    profile: './images/users/user-2.png',
  },
  {
    review:
      `Main pichle 2 saal se ${APP_NAME} App pe khel raha hu. Maine ₹10,000 se zyaada jeeta hai iss pe. 100% safe aur secure hai ye app!`,
    name: 'Alok Behera',
    won: '₹12,765',
    location: 'Kanpur, Uttar Pradesh',
    profile: './images/users/user-3.png',
  },
  {
    review: `I love spending my free time on ${APP_NAME} App. It is an excellent platform to play games and win money.`,
    name: 'Rajesh Sharma',
    won: '₹54,356',
    location: 'Udhampur, J&K',
    profile: './images/users/user-4.png',
  },
  {
    review:
      `${APP_NAME} App mein ₹70,000 se zyaada jeeta hai. Iss app ka graphics best hai jo gaming experience ko acha karta hai!`,
    name: 'Aman Kumar',
    won: '₹74,356',
    location: 'Khagaria, Bihar',
    profile: './images/users/user-5.png',
  },
]

export default function Reviews() {
  SwiperCore.use([Autoplay])
  return (
    <Wrap>
      <div className='hidden flex-wrap items-center justify-center lg:flex'>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination]}
        className='mySwiper lg:hidden'
        autoplay={{
          delay: 3000,
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className='block'>
              <Review review={review} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  )
}

function Review({ review }: { review: Review }) {
  return (
    <div className='w-full p-4 lg:w-1/3'>
      <div className='rounded-3xl bg-bg2 p-5 text-white'>
        <div className='h-28 rounded-2xl bg-bg3 p-4 text-[0.8rem] font-medium text-amber-300'>{review.review}</div>
        <div className='flex items-center justify-between px-4 pb-2 pt-4'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <div className='test-2xl font-bold'>{review.name}</div>
              <img src='./images/verify.png' alt='' className='aspect-square w-4' />
            </div>
            <div className='text-xs font-semibold text-green-500'> Won {review.won}</div>
            <div className='text-xs font-semibold text-white/50'>{review.location}</div>
          </div>
          <div className=''>
            <img src={review.profile} alt='' className='aspect-square w-20 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
