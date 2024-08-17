import React from 'react'
import Wrap from './Wrap'
import { Link } from 'react-router-dom'

export default function TopArea() {
  return (
    <Wrap>
      <div className='grid grid-cols-1 gap-7 lg:grid-cols-2'>
        <SmallTopAre />
        <SmallTopAre2 />
        <div className='hidden flex-col justify-end lg:flex'>
          <p className='rubik text-5xl font-bold text-g'>₹10 Crore+</p>
          <p className='grad mt-2 text-2xl font-bold'>Daily Winnings in Real Cash Games</p>
          <p className='mt-10 text-left text-2xl font-bold text-white/50'>Download App & Get ₹50 free!</p>
          <div className='mt-10'>
            <Link className='btn' to='download'>
              Get Download Link
            </Link>
          </div>
          <div className='mt-8 flex w-2/3 flex-row items-center gap-5'>
            <div className='flex w-full flex-col items-center gap-3'>
              <div className='flex items-center gap-3'>
                <img src='./images/topArea/star.png' className='w-4' />
                <p className='text-lg text-white/50'>4.4</p>
              </div>
              <p className='text-sm text-white/50'>Ratings</p>
            </div>
            <div className='flex h-9 w-1 items-center bg-white/20'></div>
            <div className='w-full'>
              <p className='text-center text-lg text-white/50'>5 Crore+</p>
              <p className='mt-3 text-center text-sm text-white/50'>Players</p>
            </div>
            <div className='flex h-9 w-1 items-center bg-white/20'></div>

            <div className='flex w-full flex-col items-center justify-center'>
              <div className='flex items-center justify-center gap-4'>
                <img src='./images/topArea/android-apk.png' className='w-5' />
                <img src='./images/topArea/apple-logo.png' className='w-4' />
              </div>
              <p className='mt-4 whitespace-nowrap text-sm text-white/50'>Available on</p>
            </div>
            <div className='flex h-9 w-1 items-center bg-white/20'></div>

            <div className='flex w-full items-center justify-center gap-5 pl-4'>
              <img src='./images/topArea/qr-code.png' className='w-10' />
              <p className='whitespace-nowrap text-xs text-white/50'>
                Download via <br /> QR Code
              </p>
            </div>
          </div>
        </div>
        <div className='hidden pt-10 lg:flex lg:items-end justify-end '>
          <img src='./images/topImage.png' className='lg:w-5/6 w-full' alt='topImage' />
        </div>
      </div>
    </Wrap>
  )
}

function SmallTopAre2() {
  return (
    <div className='lg:hidden'>
      <p className='rubik w-full text-center text-xs font-semibold italic text-white'>Instantly Withdraw Winnings</p>
      <div className='mt-5 flex items-center justify-center gap-5'>
        <img src='./images/payments/amazon_pay.png' className='h-auto w-[10%] sm:h-6' />
        <img src='./images/payments/BHIM.png' className='h-auto w-[10%] sm:h-6' />
        <img src='./images/payments/G_pay.png' className='h-auto w-[10%] sm:h-6' />
        <img src='./images/payments/Paytm.png' className='h-auto w-[10%] sm:h-6' />
        <img src='./images/payments/Phone_pe.png' className='h-auto w-[10%] sm:h-6' />
      </div>
    </div>
  )
}

function SmallTopAre() {
  return (
    <div className='mt-5 block lg:hidden'>
      <p className='rubik grad text-center text-lg font-bold italic'>India’s Trusted Real Cash Gaming App</p>
      <SmallTopImages />
      <img src='./images/topImage.png' className='mt-5 w-full' alt='smallTop' />
      <p className='rubik mt-5 text-center text-3xl font-bold text-g'>₹10 Crore+</p>
      <p className='grad mt-2 text-center text-lg font-bold'>Daily Cash Winnings</p>
      <Link className='btn mt-5 w-full' to='download'>
        Get Download Link
      </Link>
    </div>
  )
}

function SmallTopImages() {
  return (
    <div className='mt-4 flex items-center justify-center gap-4'>
      <img src='./images/topArea/smallTop/1.png' className='h-8' />
      <img src='./images/topArea/smallTop/2.png' className='h-8' />
      <img src='./images/topArea/smallTop/3.png' className='h-8' />
      <img src='./images/topArea/smallTop/4.png' className='h-8' />
    </div>
  )
}
