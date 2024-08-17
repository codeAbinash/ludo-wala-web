import Badges from '@/components/Badges'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Install from '@/components/Install'
import Membership from '@/components/Membership'
import Play from '@/components/Play'
import Rating from '@/components/Rating'
import Reviews from '@/components/Reviews'
import SkillBasedGames from '@/components/SkillBasedGames'
import TopArea from '@/components/TopArea'
import Withdraw from '@/components/Withdraw'
import 'swiper/css'
import 'swiper/css/pagination'
import Header from '../components/Header'
import Download from '@/components/Download'
import { useEffect, useState } from 'react'

export default function HomeScreen() {
  const [isScrolled, setIsScrolled] = useState(false)

  function handleScroll() {
    if (window.scrollY > 700) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Header />
      <div className='flex flex-col gap-20 px-5 pb-40 pt-16 sm:px-20 lg:gap-40'>
        <TopArea />
        <Badges />
        <Withdraw />
        <Rating />
        <Reviews />
        <Install />
        <SkillBasedGames />
        <Play />
        <FAQ />
        <Membership />
        <Footer />
        {isScrolled && <Download />}
      </div>
    </div>
  )
}
