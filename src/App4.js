import React, {useState, useEffect} from 'react'

const AlertMessage = (props) => {
  return(
    <div className="alert alert-primary h5 text-primary">
      <h5>{props.msg}</h5>
    </div>
  )
}


const App4 = () => {
    const [val, setVal] = useState(0)
    const [tax1, setTax1] = useState(0)
    const [tax2, setTax2] = useState(0)
    const [msg, setMsg] = useState(<p>set a price...</p>)

    const doChange = (event) => {
      setVal(event.target.value)
    }

    const doAction = () => {
      let res = <div>
        <p>軽減税率(8%) : {tax1}円</p>
        <p>通常税率(10%) : {tax2}円</p>
      </div> 
      setMsg(res)
    }
    useEffect(() => {
      setTax1(Math.floor(val * 1.08))
    })
    useEffect(() => {
      setTax2(Math.floor(val * 1.1))
    })

  
  return (
    <div>
      <h1 className="bg-primary text-white sisplay-4">React</h1>
      <div className="countainer">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Input:</label>
          <input type="number" className="form-control" onChange={doChange}/>
        </div>
        <button className="btn btn-primary" onClick={doAction}>Calc</button>
      </div>
    </div>
  )
}

export default App4; 
