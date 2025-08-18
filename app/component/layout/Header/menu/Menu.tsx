"use client"

import React from 'react'
import Element from './Element'

const Menu = () => {
  const Item = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Menu", href: "/Menu" },
    { id: 3, name: "Service", href: "/Service" },
    { id: 4, name: "Offers", href: "/Offers" }
  ]
  return (
    <>
      {Item.map((d) => {
        return (
          <div key={d.id} >
            <Element id={d.id} name={d.name} href={d.href} />
          </div>
        )
      })}


    </>
  )
}

export default Menu