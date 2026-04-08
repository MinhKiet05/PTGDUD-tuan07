import { useState } from 'react'
import './App.css'
import { useRecoilValue , useRecoilState } from 'recoil'
import counterAtom from './states/counterAtom'
import ComA from './components/ComA'
import ComB from './components/ComB'



function App() {

  return (
    <>
    <ComA/>
    <ComB/>
    </>
  )
}

export default App
