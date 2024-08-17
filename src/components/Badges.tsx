const images = [
  './images/badges/RNG_Certified.png',
  './images/badges/Made_in_india.png',
  './images/badges/No_Bots.png',
  './images/badges/Secure_Payment.png',
  './images/badges/Instant_Withdrawal.png',
  './images/badges/Customer_support.png',
]

export default function Badges() {
  return (
    <div className='hidden w-full md:block'>
      <div className='flex w-full items-center justify-center gap-7 py-5'>
        {images.map((image, index) => (
          <img key={index} src={image} alt='badge' className='h-[88px]' />
        ))}
      </div>
    </div>
  )
}
