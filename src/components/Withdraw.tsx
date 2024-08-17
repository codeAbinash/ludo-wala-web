const payments = [
  './images/payments/G_pay.png',
  './images/payments/Phone_pe.png',
  './images/payments/Paytm.png',
  './images/payments/BHIM.png',
  './images/payments/amazon_pay.png',
]
export default function Withdraw() {
  return (
    <div className='hidden flex-col items-center justify-center gap-4 sm:gap-8 lg:flex xl:gap-16'>
      <div className='mw flex w-full flex-col items-center justify-center'>
        <p className='heading'>Instantly</p>
        <p className='sub-heading'>Withdraw Winnings</p>
      </div>
      <div
        style={{
          backgroundImage: "url('./images/bg.png')",
        }}
        className='flex items-center justify-center gap-0 bg-cover px-5 py-0 sm:py-10 md:px-7 xl:gap-7 xl:px-28 xl:py-28'
      >
        {payments.map((payment, index) => (
          <div key={index} className='m-4'>
            <img src={payment as string} alt='payment' className=' ' />
          </div>
        ))}
      </div>
    </div>
  )
}
