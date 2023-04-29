import Image from 'next/image'

function Logo() {
  return (
    <div className='flex cursor-pointer items-center space-x-3'>
      <Image src='/logo.svg' width={40} height={40} alt='Logo' />
      <h1 className='font-rajdhani font-bold text-white sm:text-2xl text-xl'>Marketplace</h1>
    </div>
  )
}

export default Logo
