import Header from '@/components/Header'
import Wrap from '@/components/Wrap'
import { APP_NAME } from '@/constants'
import { ShieldCheckIcon } from 'lucide-react'
import { useEffect } from 'react'

export default function Download() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/LudoWalaV1.0.apk'
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-20 px-5 pb-16 pt-20 sm:px-20 lg:gap-40'>
        <Wrap>
          <img src='./images/rush_user_profiles.png' className='mt-7 w-2/3 max-w-lg' />
          <video autoPlay loop muted playsInline className='mt-10 w-full max-w-lg'>
            <source src='./videos/download.mp4' type='video/mp4' />
          </video>
          <div className='mt-20 flex gap-5'>
            <ShieldCheckIcon size={40} className='text-g' />
            <p className='rubik text-2xl font-bold text-g'>
              {APP_NAME} is 100% safe and secure.
              <br />
              <span className='font-normal text-g'>Click 'Download Anyway' to get the app.</span>
            </p>
          </div>
        </Wrap>
      </div>
    </div>
  )
}
