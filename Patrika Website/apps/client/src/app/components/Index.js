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
import ReadNews from './ReadNews';
import CreateNews from './CreateNews';

// Smart Contract Import
import News from '../../abis/News.json'

//Assets Import

function Index() {
	const [user,setUser] = useState();
	const [account,setAccount] = useState()
	const [newsContract, setNewsContract] = useState(null)
	const [posts,setPosts] = useState([])
	const [postCount, setPostCount] = useState(undefined)

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


	const fetchContract =  async (web3) => {
		const networkId = await web3.eth.net.getId()
		const networkData = News.networks[networkId]
		if(networkData){
			const news = new web3.eth.Contract(News.abi,networkData.address);
			setNewsContract(news);
			const postCount = await news.methods.PostCount().call({
				from:networkData.address
			}).then((postCount) => {
				setPostCount(postCount);
				return postCount;
			})

			for(var i=1;i<=postCount;i++){
				await news.methods.Posts(i).call({
					from:networkData.address
				}).then((post) => {
					setPosts((posts) => [...posts,post]);
				})
			}
			
		}else{
			alert("Dapp not deployed to detected network");
		}
	}

	// Connect the metamask walet to the website
	const ConnectMetamask = async () => {
		if(window.ethereum){
			const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
			const accounts = await web3.eth.requestAccounts();
			setAccount(accounts[0]);
			await fetchContract(web3);
			
		}else{
			alert("PLEASE INSTALL METAMASK!");
		}
	}

	// Checking if wallet is already connected
	useEffect(async () =>{ 
		await ConnectMetamask();
		console.log(posts);
		console.log(postCount);
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
							<NewsCards
							posts={posts}
							postCount={postCount}
							/>
						</>
					}/>
					<Route path='/creator' element = {
						<>	
							<Sortbar/>
							<ProfileCards/>
						</>
					}/>

					<Route path='/readnews/:id' element = {
						<>
							<ReadNews />
						</>
					}/>

					<Route path='/createnews' element = {
						<>
							<CreateNews 
							newsContract={newsContract}
							account={account}
							/>
						</>
					}/>
				</Routes>
  			</div>
		</Router>
	);
}

export default Index;
