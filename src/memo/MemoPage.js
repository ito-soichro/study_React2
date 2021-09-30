import React from 'react'
import usePersist from '../Persist'
import Memo from './Memo'
import AddForm from './AddForm'
import FindForm from './FindForm'
import DelForm from './DelForm'

const MemoPage = () => {
    const [mode, setMode] = usePersist('mode', 'default')
    return (
        <div>
            <h5 className="my-3">mode: {mode}</h5>
            <dev className="alert alert-primary pb-0">
                <AddForm/>
                <FindForm/>
                <DelForm/>
            </dev>
            <Memo/>
        </div>
    )
}
export default  MemoPage;
