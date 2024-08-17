import { APP_NAME } from '@/constants'
import Wrap from './Wrap'

export default function Rating() {
  return (
    <Wrap>
      <p className='heading'>Our Players</p>
      <p className='sub-heading'>Trust {APP_NAME}</p>
      <p className='body-content'>
        Play real money games in India on highly trusted money game app Ludo Wala . Check out reviews from real users
        below.
      </p>
      <img src='./images/rating.png' alt='rating' className='mt-7 sm:mt-14' />
    </Wrap>
  )
}
