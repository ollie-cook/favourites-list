'use client'

import { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import EditListForm from './EditListForm';
import { type List } from '@/app/utils/types';

export default function List( { list } : { list: List }) {
  const [listState, setListState] = useState(list)
  const [mode, setMode] = useState('read');

  return (
    <div className="group relative rounded-lg p-4 bg-gradient-to-br from-blue-950 to-[#0a1539]">
      {
        mode == 'read' ?
        <>
        <h1 className="font-bold text-3xl text-white text-center">
          {listState.title}
        </h1>
        <button 
          onClick={() => setMode('edit')}
          className="absolute top-4 right-4 hidden group-hover:block"
        >
          <FaEdit className="h-6 w-6" style={{color: 'white'}} />
        </button>
        <ol className="list-decimal list-inside mt-3 text-xl text-white">
          <li className="mb-2">{listState.items[0]}</li>
          <li className="mb-2">{listState.items[1]}</li>
          <li className="mb-2">{listState.items[2]}</li>
          <li className="mb-2">{listState.items[3]}</li>
          <li className="">{listState.items[4]}</li>
        </ol>
        </>
        :
        <EditListForm list={listState} setList={setListState} setMode={setMode} />
      }
      
    </div>
  )
}