// IMPORTS 
import './nasa.css'
import { useSelector, useDispatch } from 'react-redux'
import { CgShapeHexagon } from 'react-icons/cg'
import { MdPolymer } from 'react-icons/md'
import { store } from '../../store'
import { getIotd, getImgSel } from '../../store/actions/NasaActions'

// STORE DISPATCH
store.dispatch(getIotd())
store.dispatch(getImgSel())


// MAIN FUNC
const Nasa = () => {

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
            <header className="App-header2">
                <div className='align'>
                    <p className='lo'><CgShapeHexagon color='#53b986' />image du jour : {iotd.date}</p>
                    <p className='lo'><MdPolymer color='#53b986' />{iotd.title}</p>
                    <img src={iotd.url} className="test" alt="logo" />
                </div>

                <input id='date' className='test' type="date" />
                <p className='text'>{iotd.explanation}</p>
                <div className='tt'>
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
export default Nasa;