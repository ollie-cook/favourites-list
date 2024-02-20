'use client'

import { type ListType } from '@/app/utils/types'
import List from "./List"
import Cookies from 'js-cookie'

const defaultTitles = [
  "Top 5 Movies 🎥",
  "Top 5 TV Shows 📺",
  "Top 5 Books 📚",
  "Top 5 Places 🗺️",
  "Top 5 Artists 🧑‍🎤",
  "Top 5 Songs 🎵"
]

export default function ListGrid() {
  const lists: ListType[] = []

  //fetch cookies
  const allCookies = Cookies.get() 
  if(Object.keys(allCookies).length === 0) {
    for (let i=0; i<6; i++) {
      const guid = crypto.randomUUID();

      const defaultList = {
        id: guid,
        order: i,
        title: defaultTitles[i],
        items: ["", "", "", "", ""]
      }

      Cookies.set(guid, JSON.stringify(defaultList), { expires: 365 })
      lists.push(defaultList)
    }
  } else {
    for (const [key, value] of Object.entries(allCookies)) {
      lists.push(JSON.parse(value))
    }
  }

  lists.sort((a, b) => a.order - b.order)

  return (
    <div className="grid grid-col-1 pb-4 gap-4 mt-8 mb-12 w-11/12 sm:w-5/6 md:w-2/3 lg:grid-cols-2 lg:w-5/6 xl:w-2/3">
      {
        lists.map((list) => {
          return <List key={list.id} list={list} />
        })
      }
    </div>
  )
}

{
  /*
<List 
          list={
            {
              id: "1",
              title: "My Top 5 Movies 🎥",
              items: ["Good Will Hunting", "Spiderverse", "Grand Budapest Hotel", "In Bruges", "Puss In Boots"]
            }
          }/>
        <List list={{id: '2', title: "My Top 5 TV Shows 📺", items: [""]}} />
        <List list={{id: '3', title: "My Top 5 Artists 🧑‍🎤", items: [""]}} />
        <List list={{id: '4', title: "My Top 5 Songs 🎵", items: [""]}} />
  */
}