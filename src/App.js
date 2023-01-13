import React, {useState} from 'react'
import ClassCounter from './Counter/ClassCounter';

function App() {

    const [details, setDetails] = useState(false)

    return (
      // <ClassCounter/>
        <div style={
            {
                width: "500px",
                margin: "0 auto"
            }
        }>
            <button style={
                    {
                      marginLeft: "30%"
                    }
                }
                type='button'
                className='btn btn-primary'
                onClick={
                    () => setDetails(prev => !prev)
            }>
                {
                details ? "Hide Details" : "Show Details"
            } </button>

            {
            details && <div style={
              {
                marginLeft: "23%"
              }
            }>
                <p>
                    <u>
                      Hello! My name is Chicki!
                    </u>
                </p>
            </div>
        } </div>
    )
}

export default App