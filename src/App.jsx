import './App.css'
import React from 'react'
import { CCLButton, CCLInput } from './components/atoms'
import { Button } from './stories/Button'

function App() {

  return (
    <>
        <CCLInput className="input" label="name" />
        <CCLButton variant={"primary"} label={"Click Me"} size={"medium"} />
    </>
  )
}

export default App
