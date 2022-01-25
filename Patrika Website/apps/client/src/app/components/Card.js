/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Card.css';

/* Component import */

/* Asset imports */
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar } from '@mui/material';

function Card(){

    return(
        <div className='Card'>
            <div className='card-image'>
            </div>
            <div className='news-headline'>
                Another Senior Congress Exit: RPN Singh Joins BJP Ahead Of UP Election
            </div>
            <div className='news-description'>
                UP Election 2022: RPN Singh is the second big exit for the Congress in UP after Jitin Prasada, who is now a minister in the Yogi Adityanath-led BJP government in the state.
            </div>
            <div className='news-details'>
                <div className='news-likes-container'>
                    <span className='news-likes-heading'>
                        <FavoriteBorderIcon/>
                    </span>
                    <span className='news-likes'>
                        19 (15 USD)
                    </span>
                </div>
                <div className='news-owner-container'>
                    <div className="news-avatar">
                        <Avatar 
                            alt="Parv Gupta" 
                            src="/static/images/avatar/1.jpg" 
                            sx={{
                                width:32,
                                height:32
                            }}
                        />
                    </div>
                    <div className="owner-username-container">
                        <span className='owner-heading'>Owner</span>
                        <span className='owner-username'>@parvg555</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;