import React from 'react'
import cl from './components.module.scss'
import Link from 'next/link'

export default function Button() {
  return (
    <Link href={'/post'}><button className={cl.back}>Back</button></Link>
  )
}
