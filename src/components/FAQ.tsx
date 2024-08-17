import type React from 'react'
import Wrap from './Wrap'
import { useState } from 'react'
import { APP_NAME } from '@/constants'

export default function FAQ() {
  return (
    <Wrap>
      <p className='heading' id='FAQ'>
        MORE QUESTIONS?
      </p>
      <p className='sub-heading'>Here are our FAQ’s</p>
      <Question />
    </Wrap>
  )
}

function Question() {
  return (
    <div className='mt-10 flex w-full flex-col gap-5 rounded-3xl border border-white/20 bg-white/5 p-5 text-white sm:mt-16 sm:gap-10 sm:p-10'>
      <QuestionItem
        question='Where can I play money winning games?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            {APP_NAME} app is an ideal platform to play money-winning games. Play online games earn money with
            skill-based games like ludo, carrom, call break, snakes & ladder and many more. Download {APP_NAME} App now
            and start playing real cash games on highly trusted real money gaming app.
          </p>
        }
      />
      <QuestionItem
        question={`Is it safe to play real money games on  ${APP_NAME}?`}
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            {APP_NAME} App is 100% safe & secure. 5 Crore+ Users have downloaded and played real money games on the Ludo
            Wala money winning platform.
          </p>
        }
      />
      <QuestionItem
        question={`Can I play online cash games and win real money on ${APP_NAME} ?`}
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            Yes you can choose to play from various online cash games like Ludo, Carrom, Call Break, Pool, Archery etc.
            & win upto 70 Lacs daily. Withdraw your winnings instantly into your bank account using UPI (Paytm, Gpay,
            Phonepe, Amazon pay etc.)
          </p>
        }
      />
      <QuestionItem
        question='Can I withdraw cash from money winning apps?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            Yes. You can instantly withdraw real cash in your bank account from money winning apps like Ludo Wala . Ludo
            Wala processes instant winnings withdrawals using UPI with 100% safety & security.
          </p>
        }
      />
      <QuestionItem
        question='Is it safe to add money to the online games wallet?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            Yes, adding money to your game wallet is 100% safe. In order to ensure seamless transactions, Ludo Wala has
            partnered with Industry’s leading player. You can add money using UPI, Bank account, Wallets, or
            Debit/Credit cards.
          </p>
        }
      />
      <QuestionItem
        question='How do online real cash games like Ludo Wala ensure fair play?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            There are many steps we have taken to ensure fairplay in all our online money games at Ludo Wala . RNG
            certification is one important step which ensures randomization of numbers generated in games where dice or
            cards are involved.
          </p>
        }
      />
      <QuestionItem
        question='What is Ludo Wala by Hike?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            Ludo Wala by Hike is an online gaming platform where the competitive spirit of India comes alive. All games
            on the Ludo Wala app are skill-based and allow players to play games to earn money.
          </p>
        }
      />
      <QuestionItem
        question='What makes real money games on Ludo Wala unique?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            <ul className='list-disc pl-5'>
              <li>Mobile-first: We build for Bharat where the first (and often only screen) is a smartphone.</li>
              <li>
                AAA-quality: Expect only the highest gaming quality on Ludo Wala . If it’s not the best in the real
                money gaming industry, it’ll never make it to the app. Promise!
              </li>
              <li>
                Skills trump everything else: Games of skill form the core of gameplay on Ludo Wala regardless of what
                table-value you’re playing with.
              </li>
              <li>
                Bite-sized Gameplay: Whether you have only 2 minutes or 2 hours, with casual games on Ludo Wala , you
                can keep yourself entertained.
              </li>
              <li>
                People over bots: Gameplay is social and players play with or against others which means there are no
                bots on Ludo Wala .
              </li>
            </ul>
          </p>
        }
      />
      <QuestionItem
        question='Why should we play on  Ludo Wala ?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            <p className='mb-2 mt-2 text-white/80'>10 reasons to play on Ludo Wala </p>
            <ul className='list-disc pl-5'>
              <li>Real Players: There are, and there will be no bots ever!</li>
              <li>Real Money: Put your skills and spare time to good use.</li>
              <li>
                Real fun: AAA-quality, super clean design of the app gives you a realistic gameplay experience. Plus,
                there’s Ludo Wala Avatar for a personal touch.
              </li>
              <li>
                Instant withdrawals: It’s your hard-earned money & you shouldn’t have to wait for it. On Ludo Wala ,
                your winnings reach your bank account within minutes!
              </li>
              <li>
                100% legal and secure:Scared about law around real money earning games? Don’t be. Playing on Ludo Wala
                app is 100% legal for Indian residents.
              </li>
              <li>
                Frequent updates:We take feedback very seriously. We update the app almost every week for reported
                issues and improved gameplay experience.
              </li>
              <li>
                Great community: Community for casual games? Yes, please! Connect with fellow gamers and learn new
                strategies. Or just hang for a good time.
              </li>
              <li>
                RNG certification: RNG stands for Random Number Generation. Ludo Wala being RNG certified means that the
                number that appears on the cube or the cards you get are completely random and cannot be controlled by
                anyone.
              </li>
              <li>
                Anti-cheat platform:Our strict Fairplay Policy ensures that you don’t lose money to hackers while
                playing real cash games on Ludo Wala . We restrict hacking with better anti-cheat fixes with every app
                update. Happy real money gaming to you!
              </li>
              <li>
                Save with Ludo Wala VIP:Penny saved is penny earned. Save (read: earn) more real cash with Ludo Wala
                VIP. Plus, higher withdrawals & better offers!
              </li>
            </ul>
          </p>
        }
      />
      <QuestionItem
        question='How to download Ludo Wala App?'
        answer={
          <p className='text-xs text-white/60 sm:text-sm'>
            <p className='mb-2 mt-2 text-white/80'>On Android:</p>
            <ul className='list-decimal pl-5'>
              <li>If you are using a desktop/laptop, enter your phone number to get a download link via sms.</li>
              <li>Tap on the link to download and open the .apk file.</li>
              <li>If you are using a mobile device, tap on the 'Download Ludo Wala App' button.</li>
              <li>Tap to open the file.</li>
              <li>Click 'Install'. If you see a warning, visit ‘Settings’ and tap on ‘Allow from this source’.</li>
              <li>Sign up on Ludo Wala by entering your mobile number and 4-digit OTP received.</li>
              <li>Set your Ludo Wala Avatar using a selfie or choose from the gallery.</li>
              <li>Claim your Signup bonus and start playing!</li>
            </ul>
            <p className='mb-2 mt-5 text-white/80'>On iOS:</p>
            <ul className='list-decimal pl-5'>
              <li>Visit the app Store.</li>
              <li>Search for ' Ludo Wala - Play Games, Win Cash'.</li>
              <li>Tap on the 'Get' icon.</li>
              <li>Sign up on Ludo Wala by entering your mobile number and 4-digit OTP received.</li>
              <li>Set your Ludo Wala Avatar using a selfie or choose from the gallery.</li>
              <li>Claim your Signup bonus and start playing!</li>
            </ul>
          </p>
        }
        noBorder
      />
    </div>
  )
}

function QuestionItem({
  question,
  answer,
  noBorder,
}: {
  question: string
  answer: React.ReactNode
  noBorder?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`w-full ${!noBorder ? 'border pb-5 sm:pb-10' : ''} flex justify-between gap-5 border-transparent border-b-white/10`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        <p className='text-sm font-bold sm:text-lg'>{question}</p>
        {isOpen && <p className='mt-3'>{answer}</p>}
      </div>
      <div className='flex-none'>
        <img
          src={`./images/faq_${isOpen ? 'up' : 'down'}_arrow.png`}
          alt='arrow'
          className='h-5 w-5 cursor-pointer sm:h-6 sm:w-6'
        />
      </div>
    </div>
  )
}
