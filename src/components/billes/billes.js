import './css/billes.css'
import test2 from '../../test2.svg'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../store'
import { getPrevisions } from '../../store/actions/PrevisionsActions'
store.dispatch(getPrevisions())


const Billes = () => {
    const listPrevisions = useSelector(state => state.previsions.data)
    console.log("RECUPERATIONS",listPrevisions.city.coord.lat)
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
                    récupéré avec le store ! : {listPrevisions.city.coord.lat}
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