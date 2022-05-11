import '../weather/SearchBar.css'
import {MdLocationSearching} from 'react-icons/md'
const SearchBar = () => {
   return(
       <div className='t'>
           <input type="text" placeholder='Ville...'/>  
            <MdLocationSearching className='icon' size={40} />
       </div>
   )

}

export default SearchBar;