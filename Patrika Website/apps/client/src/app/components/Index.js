// Library Imports
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Web3 from 'web3';
import Cookies from 'js-cookie';

// Dependencies Import
import './css/Index.css'

// Components Import
import Navbar from './Navbar';
import NewsCards from './NewsCards';
import Sortbar from './Sortbar';
import ProfileCards from './ProfileCards';

//Assets Import

function Index() {
	const [user,setUser] = useState();
	const [account,setAccount] = useState()

	//Function to set if navbar is visible or not
	var lastScroll = window.pageYOffset;
	const controlNavbar = () => {
		var currentScrollPos = window.pageYOffset;
		if(lastScroll > currentScrollPos || currentScrollPos < 140){
			document.getElementById('navbar').style.top = "0";
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

	// Connect the metamask walet to the website
	const ConnectMetamask = async () => {
		if(window.ethereum){
			const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
			const accounts = await web3.eth.requestAccounts();
			setAccount(accounts[0]);
		}else{
			alert("PLEASE INSTALL METAMASK!");
		}
	}

	// Checking if wallet is already connected
	useEffect(async () =>{ 
		await ConnectMetamask();
	},[])


  	return(
		<Router>  
			<div className='index'>
    			<Navbar
					user={user}
					account = {account}
					ConnectMetamask = {ConnectMetamask}
				/> 
				<Routes>
					<Route path='/' element = {
						<>
							<div className='card-container'>
								INDEX PAGE
							</div>
						</>
					}/>
					<Route path='/news' element = {
						<>	
							<Sortbar/>
							<NewsCards/>
						</>
					}/>
					<Route path='/creator' element = {
						<>	
							<Sortbar/>
							<ProfileCards/>
						</>
					}/>
				</Routes>
  			</div>
		</Router>
	);
}

export default Index;
