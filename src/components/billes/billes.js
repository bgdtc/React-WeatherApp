import './css/billes.css'
import test2 from '../../test2.svg'
import React, { useEffect, useState } from 'react'



const Billes = () => {
    
    const [billes, setBilles] = useState(0)
  
    useEffect(() => {
      document.getElementById('billes').innerHTML = `vous avez ${billes} billes`
    })
    return(
        <div className = "App" >
            <header className="App-header">
                <img src={test2} className="App-logo" alt="logo" />
                <p id='billes'>
                    bonjour
                </p>
                <p>
                    don't Learn React
                  
                </p>
                <div>
                    <button className="App-btn" onClick={() => setBilles(billes + 1)}>
                        Ajout de billes
                    </button>
                    <button className="App-btn2" onClick={() => setBilles(0)}>
                        Reset Billes
                    </button>
                </div>

            </header>
</div >

    )
}

export default Billes;