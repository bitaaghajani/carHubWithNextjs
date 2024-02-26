'use client'
import { SearchManufacturerProp } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
export default function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProp) {
    const [query, setQuery] = useState('')
    return (
        <div className="search-manufacturer">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className='ml-4'
                            alt="car logo"
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    ></Combobox.Input>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>

                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
