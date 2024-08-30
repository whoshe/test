import Link from 'next/link'
import Image from 'next/image'
import Nav from './landingNav'
import Hero from './landingHero'

export default function Header() {
  return (
    <>
      <header className='bg-gradient-to-t from-base-100 to-green-300 dark:to-green-800 py-16'>
        {/* 머리글 */}
        <Hero />
        <Nav />
      </header>
    </>
  )
}
