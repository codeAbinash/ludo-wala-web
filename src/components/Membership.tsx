import Wrap from './Wrap'

export default function Membership() {
  return (
    <Wrap>
      <p className='heading'> Ludo Wala 's</p>
      <p className='sub-heading'>Membership & Certification</p>
      <div className='mt-7 flex sm:mt-14'>
        <div className='w-1/3 p-1 sm:p-3'>
          <img src='./images/membership/rush-certificate.png' />
        </div>
        <div className='w-1/3 p-1 sm:p-3'>
          <img src='./images/membership/rush-member-1.png' />
        </div>
        <div className='w-1/3 p-1 sm:p-3'>
          <img src='./images/membership/rush-member-2.png' />
        </div>
      </div>
    </Wrap>
  )
}
