import React, {useState, useEffect} from 'react'

const useCounter = () => {
  const [num, setNum] = useState(0)
  const count = () => {
    setNum(num + 1)
  }
  return[num, count]
}

const AlertMessage = () => {
  const [counter, plus] = useCounter()
  return(
    <div className="alert alert-primary h5 text-center"> 
      <h4>count: {counter} .</h4>
      <button onClick={plus} className="btn btn-primary">count</button>
    </div>
  )
}

const App5 = () => {
  
  return (
    <div>
      <h1 className="bg-primary text-white sisplay-4">React</h1>
      <div className="countainer">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage />
      </div>
    </div>
  )
}

export default App5; 
