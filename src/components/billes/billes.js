// IMPORTS 
import './css/billes.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../../store'
import { getIotd, getImgSel } from '../../store/actions/NasaActions'

// STORE DISPATCH
store.dispatch(getIotd())
store.dispatch(getImgSel())


// MAIN FUNC
const Billes = () => {
     
    // VARIABLE DU STATE
    const iotd = useSelector(state => state.iotd.data)
    // LOG DES DATAS
    console.log("IOTD", iotd)

    // CONFIG USE DISPATCH POUR L'UTILISER APRÈS
    const dispatch = useDispatch()
 
    // FONCTION RECHERCHE DATE API
    const search = (query) => {
        // EXECUTE LA FONCTION DU STORE EN LUI PASSANT UNE QUERY
        dispatch(getImgSel(query))
    }
    // PAGE HTML
    return (
        <div className="App" >
            <header className="App-header">
                image du jour : {iotd.date}
                <br />
                {iotd.title}
                <img src={iotd.hdurl} className="" alt="logo" />
                <input id='date' type="date" />
                <p className='text'>{iotd.explanation}</p>
                <div>
                  

                    <button className="App-btn" onClick={() => search(document.getElementById('date').value)}>
                        Get IOTD

                    </button>
                    <button className="App-btn2" onClick={() => dispatch(getIotd())}>
                        Reset
                    </button>
                   
                </div>


            </header>
        </div >

    )
}
// EXPORT DU COMPONENT
export default Billes;