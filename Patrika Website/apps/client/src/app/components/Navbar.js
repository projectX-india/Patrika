import React,{useState} from 'react';

import './css/Navbar.css'


import SearchIcon from '@mui/icons-material/Search';

function Navbar({
	user
}) {

	const [searchbar, setSearchbar] = useState(false)

  	return <div className='navbar' id='navbar'>
    	{/* logo  */}
		<div className='navbar-logo'>
			PATRIKA
		</div>
		<div className='navbar-menu'>
			<div className='navbar-menu-option option-active'>
				News
			</div>
			<div className='navbar-menu-option'>
				Creators
			</div>
		</div>
		<div className="navbar-right-container">
			<div className="navbar-search">
					<SearchIcon	
						onClick = {() => {
							setSearchbar(!searchbar);
						}}
					/>
					<input 
						className={
							searchbar?'navbar-search-expanded':'navbar-search-hidden'
						}
						type="text" 
						id = "search"
						placeholder='Search news or people'
					/>
			</div>
			<div className='navbar-connect-container'>
				<span>{user?(`${user.username}`):('Connect Wallet')}</span>
			</div>
		</div>
		
  	</div>;
}

export default Navbar;
