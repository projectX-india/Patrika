/* Library import */
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

/* Dependency import */
import './css/Card.css';

/* Component import */

/* Asset imports */
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar } from '@mui/material';
import axios from './axios.js';

function Card({post}){

    const [headline,setHeadline] = useState('');
    const [contentHash,setContentHash] = useState([]);
    const [content,setContent] = useState('');

    useEffect(async () => {
        const datalao =  async () => {
            var res = await axios.get(`${post.SummaryHash}`);
            setHeadline(res.data);
        }
        datalao();
    }, [])


    const hashToText =  async (hash) => {
        var res = await axios.get(`${hash}`);
        return res.data;
    }

    useEffect(async () => {
        extractContentHash();
        const contentDaalo = async () => {
            for(let i=0;i<contentHash.length;i++){
                let item  = contentHash[i];
                if(item.isPara){
                    var temp = await hashToText(item.hash);
                    setContent((content)=>[
                        ...content,{
                            "isPara":item.isPara,
                            "content":temp
                        }
                    ])
                }else{
                    setContent((content)=>[
                        ...content,{
                            "isPara":item.isPara,
                            "content":`https://ipfs.infura.io/ipfs/${item.hash}`
                        }
                    ])
                }   
            }
        }
        contentDaalo();
    }, [])


    const extractContentHash = ()=>{
        let data=post.ContentHash;
        // console.log(data)
        const myArray = data.split('>>');
        // console.log(myArray.length)
        for(let i=0;i<myArray.length-1;i++){
            let extra  = myArray[i].split(':')[0];
            let isPara = extra[extra.length-1]=='h';
            let hashh = myArray[i].split(':')[1];
            setContentHash((contentHash)=>[...contentHash,{"isPara":isPara,"hash":hashh}])
            // console.log(myArray[i].split(':')[1]);
        }
    }

    const phliContentImage = () => {
        for(let i=0;i<content.length;i++){
            let item = content[i];
            if(!item.isPara){
                return item.content;
            }
        }
    }


    return(
        <div 
            className='Card'
            onClick={event =>  window.location.href=`/readnews/${post.id}`}
        >
            {/* <Link to={`/readnews/${post.id}`}> */}
            <div className='card-image'>
                <img src={
                    (phliContentImage())?phliContentImage():'http://placekitten.com/500/300'
                } alt="" />
            </div>
            <div className='news-headline'>
                {headline}
            </div>
            <div className='news-description'>
                {}
            </div>
            <div className='news-details'>
                <div className='news-likes-container'>
                    <span className='news-likes-heading'>
                        <FavoriteBorderIcon/>
                    </span>
                    <span className='news-likes'>
                        {post[3]} ({post[5]} USD)
                    </span>
                </div>
                <div className='news-owner-container'>
                    <div className="news-avatar">
                        <Avatar 
                            alt={post[6].slice(0,5)} 
                            src="/static/images/avatar/1.jpg" 
                            sx={{
                                width:32,
                                height:32
                            }}
                        />
                    </div>
                    <div className="owner-username-container">
                        <span className='owner-heading'>Reporter</span>
                        <span className='owner-username'>@{post[6].slice(0,5)}</span>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    );
}

export default Card;