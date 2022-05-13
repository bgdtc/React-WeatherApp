// IMPORTS 

// CSS
import './nasa.css'

// STORE
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../../store'
import { getIotd, getImgSel } from '../../store/actions/NasaActions'

// ICONS
import { CgShapeHexagon } from 'react-icons/cg'
import { MdPolymer } from 'react-icons/md'

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
    // TRUC POUR LE CONTROLE K
    // const handleKeyPress = React.useCallback((event) => {
    //     if (event.key) {
    //         event.preventDefault();
    //         search(document.getElementById('date').value)
    //         console.log("bite");
    //     }
    // })
    // React.useEffect(() => {
    //     document.addEventListener("keydown", handleKeyPress)
    // }, [])
    // PAGE HTML
    return (
        <div className="App" >
            <header className="App-header2">
                <div className='align'>
                    <p className='lo'><CgShapeHexagon color='#53b986' />image du jour : {iotd.date}</p>
                    <p className='lo'><MdPolymer color='#53b986' />{iotd.title}</p>
                    <img src={iotd.url} className="test" alt="logo" />
                </div>

                <input id='date' className='test' type="date" onChange={() => search(document.getElementById('date').value)} />
                <p className='text'>{iotd.explanation}</p>
                <div className='tt'>
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