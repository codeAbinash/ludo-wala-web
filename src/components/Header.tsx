import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const options = [
  {
    name: 'Home',
    href: '/',
    link: true,
  },
  {
    name: 'Reft & Earn',
    href: '#',
    link: false,
  },
  {
    name: 'Ludo Tournament',
    href: '#',
    new: true,
    link: false,
  },
  {
    name: "FAQ's",
    href: '#FAQ',
    link: false,
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <div className='fixed z-50 top-0 flex w-full items-center justify-center px-5 backdrop-blur-3xl sm:px-20'>
        <div className='flex w-full items-center justify-between py-3'>
          <img src='./icon.png' alt='icon' className='h-8 sm:h-11' />
          <div className='hidden gap-10 sm:flex'>
            {options.map((option) => (
              <Option key={option.name} name={option.name} href={option.href} isNew={option.new} link={option.link} />
            ))}
          </div>
          <div className='flex items-center justify-center gap-5 sm:hidden'>
            <div className='flex'>
              <img src='./images/green_star.png' className='size-5' />
              <p className='rubik font-semibold text-g'>
                4.4 <span className='font-medium text-white/60'> / 5</span>
              </p>
            </div>
            <div
              className='flex rounded-lg border border-white/30 px-1.5 py-0.5'
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <MenuIcon className='w-5 text-white' />
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className='fixed right-0 top-0 z-50 h-full w-full bg-black/30 backdrop-blur-md'
          onClick={() => setIsMenuOpen(false)}
        >
          <div className='ml-auto h-full w-2/3 max-w-sm rounded-bl-2xl rounded-tl-2xl bg-bg3 from-green-50 p-5'>
            <div className='w-full'>
              <XIcon className='ml-auto size-9 rounded-full bg-white/10 p-2 text-white' />
            </div>
            <div className='mt-10 flex h-full flex-col gap-5'>
              {options.map((option) => (
                <Option key={option.name} name={option.name} href={option.href} isNew={option.new} link={option.link} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Option({ name, href, isNew, link }: { name: string; href: string; isNew?: boolean; link: boolean }) {
  const location = useLocation()
  if (link) {
    return (
      <Link
        to={href}
        className={`text-sm font-medium uppercase ${location.pathname === href ? 'text-white' : 'text-white/70'}`}
      >
        {name}

        {isNew && (
          <span className='rubik ml-2 rounded-full bg-rose-500 px-2 py-[0.15rem] text-[0.5rem] font-semibold text-white'>
            New
          </span>
        )}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={`text-sm font-medium uppercase ${location.pathname === href ? 'text-white' : 'text-white/70'}`}
    >
      {name}

      {isNew && (
        <span className='rubik ml-2 rounded-full bg-rose-500 px-2 py-[0.15rem] text-[0.5rem] font-semibold text-white'>
          New
        </span>
      )}
    </a>
  )
}
