// Library Imports
import React,{useState,useEffect} from 'react';
import Web3 from 'web3';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

// Dependencies Import
import './css/Index.css'

// Components Import
import Navbar from './Navbar';

//Assets Import

function Index() {
	const [user,setUser] = useState();
	

	//Function to set if navbar is visible or not
	var lastScroll = window.pageYOffset;
	const controlNavbar = () => {
		var currentScrollPos = window.pageYOffset;
		if(lastScroll > currentScrollPos || currentScrollPos < 140){
			document.getElementById('navbar').style.top = "0"
		}else{
			document.getElementById('navbar').style.top = "-80px";
		}
		if(currentScrollPos > 0){
			document.getElementById('navbar').classList.add('navbar-shadow');
		}else{
			document.getElementById('navbar').classList.remove('navbar-shadow');
		}
		lastScroll = currentScrollPos
	}
	useEffect(() => {
		window.addEventListener('scroll',controlNavbar)
		return () => {
			window.removeEventListener('scroll',controlNavbar)
		}
	},[])

  	return(
	<Router>  
		<div className='index'>
    		<Navbar
				user={user}
			/> 
			<Routes>
				<Route path='/' element = {
					<>
						<div className='card-container'>
						</div>
					</>
				}/>
			</Routes>
  		</div>
	</Router>
	);
}

export default Index;
