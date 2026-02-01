import React from 'react'

export default function Button({ label }) {
  return <button className={`shadow-util px-6 p-2.5 rounded-full font-medium transition-all hover:bg-neutral-100 focus:bg-neutral-100`}>{label}</button>
  
}
