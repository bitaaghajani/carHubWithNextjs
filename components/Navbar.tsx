import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomeButton from './CostumButton'

export default function Navbar() {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1400px] max-auto flex justify-between items-center sm-px-16 px-6 py-4'>
                <Link href='/' className='flex items-center justify-center'>
                    <Image src='/logo.svg' alt='car hub logo' width={118} height={18} className='object-contain' />
                </Link>
                <CustomeButton
                    title='sign up'
                    btnType='button'
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                />
            </nav>
        </header>
    )
}
