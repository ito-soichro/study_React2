import React from 'react'
import MemoPage from './memo/MemoPage'
import './App.css'

const App = () => {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Memo.</h4>
        <MemoPage />
      </div>
    </div>
  )
}

export default App; 
