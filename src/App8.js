import React, {useState, useEffect} from 'react'

// 合計計算の関数
const total = (a) => {
  let re = 0
  for(let i = 0; i <= a; i++){
    re += i
  }
  return re
}

// 消費税計算の関数
const tax = (a) => {
  return Math.floor(a * 1.1)
}

// 数値を計算しメッセージを返す独自フック関数
const useCalc = (num=0, func = (a) =>{return a} ) => {
  const [msg, setMsg] = useState(null)
  const setValue = (p) => {
    let res = func(p)
    setMsg(<p className="h5">※ {p}の結果は、{res}です。</p>)
  }
  return [msg, setValue]
}

// デフォルトのコンポーネント
const PlainMessage = (props) => {
  const [msg, setCalc] = useCalc()

  const onChange = (e) => {
    setCalc(e.target.value)
  }

  return(
    <div className="p-3 h5">
      <h5>{msg}</h5>
      <input type="number" onChange={onChange} className="form-control"/>
    </div>
  )
}

// 合計計算のコンポーネント
const AlertMessage = (props) => {
  const [msg, setCalc] = useCalc(0,total)

  const onChange = (e) => {
    setCalc(e.target.value)
  }
  return(
    <div className="alert alert-primary h5 text-primary">
      <h5>{msg}</h5>
      <input type="number" onChange={onChange} min="0" max="10000" className="form-control" />

    </div>
  )
}

//消費税コンポーネント
const CardMessage = (props) => {
  const [msg, setCalc] = useCalc(0,tax)
  const onChange = (e) => {
    setCalc(e.target.value)
  }
  return(
    <div className="card p-3 h5 border-primary">
      <h5>{msg}</h5>
      <input type="range" onChange={onChange}  min="0" max="10000" className="form-control"/>
    </div>
  )
}

// ベースコンポーネント
const App8 = () => {
  return (
    <div>
    <h1 className="bg-primary text-white sisplay-4">React</h1>
    <div className="countainer">
      <h4 className="my-3">Hooks sample</h4>
      <PlainMessage />
      <AlertMessage/>
      < CardMessage/>

    </div>
  </div>
  )
}

export default App8; 
