"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'

export default function CostumeButton({title, containerStyles, handleClick, btnType}:CustomButtonProps) {
  return (
    <button
     disabled={false}
     type={btnType ||'button'}
     className={`custom-btn ${containerStyles}`}
     onClick={handleClick}
    >
     <span className={`flext-1`}>{title}</span>
    </button>
  )
}
