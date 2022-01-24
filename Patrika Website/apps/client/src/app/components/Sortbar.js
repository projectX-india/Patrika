import React,{useEffect} from 'react';

import './css/Sortbar.css'


import SortIcon from '@mui/icons-material/Sort';

function Sortbar() {

    var lastScroll = window.pageYOffset;
	const controlNavbar = () => {
		var currentScrollPos = window.pageYOffset;
		if(lastScroll > currentScrollPos || currentScrollPos < 140){
			document.getElementById('sortbar').style.top = "90px";
		}else{
			document.getElementById('sortbar').style.top = "20px";
		}

		lastScroll = currentScrollPos
	}
	useEffect(() => {
		window.addEventListener('scroll',controlNavbar)
		return () => {
			window.removeEventListener('scroll',controlNavbar)
		}
		
	},[])

    return <div className='sortbar' id="sortbar">
        <div className="sort-dropdown-container">
            <div className='sort-button sort-button-shadow'>
                <SortIcon />
                <span className='sort-by-text'>Sort by</span>
                <span className='date-listed-text'>Date Listed: Newest</span>
            </div>
        </div>
    </div>;
}

export default Sortbar;
