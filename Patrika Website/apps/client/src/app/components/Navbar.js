// Library Imports
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// Dependencies Import
import './css/Navbar.css'

// Components Import

// Assets Import
import SearchIcon from '@mui/icons-material/Search';
import PostAddIcon from '@mui/icons-material/PostAdd';

function Navbar({
	user,
	account,
	ConnectMetamask
}) {

	// Extracts the URL of the page for menu highlights
	const [url,setUrl] = useState('/');
	useEffect(() => {
		setUrl(window.location.pathname);
	}, []);


	const [searchbar, setSearchbar] = useState(false)

  	return <div className='navbar' id='navbar'>
    	{/* logo  */}
		<Link 
			to='/'
			onClick={() => setUrl('/')}
		>
			<div className='navbar-logo'>
				PATRIKA
			</div>
		</Link>
		<div className='navbar-menu'>
			<Link 
				to='/news'
				onClick={() => setUrl('/news')}
			>
				<div 
					className={`navbar-menu-option ${
						(url === '/news')?'option-active':''
					}`}
				>
					News
				</div>
			</Link>
			<Link
				to='/creator'
				onClick={() => setUrl('/creator')}
			>
				<div 
					className={`navbar-menu-option ${
						(url === '/creator')?'option-active':''
					}`}
				>
					Creators
				</div>
			</Link>
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
			<div className="addpost">
				<Link
					to='/createnews'
					onClick={() => setUrl('/createnews')}
				>
					<PostAddIcon/>
				</Link>
			</div>
			<div 
				className='navbar-connect-container'
				onClick={async () => {
					await ConnectMetamask();
				}}
			>
				<span>{account?(`${account}`):('Connect Wallet')}</span>
			</div>
		</div>
		
  	</div>;
}

export default Navbar;
