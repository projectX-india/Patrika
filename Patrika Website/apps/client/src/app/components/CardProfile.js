/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/CardProfile.css';

/* Component import */

/* Asset imports */

function CardProfile(){

    return(
        <div className='CardProfile'>
            <img src="https://i.imgur.com/2DhmtJ4.jpg" class="CardProfile-cover" alt="" />
            <div className='CardProfile-overlay'>
                <div className='CardProfile-header'>
                    <svg class="CardProfile-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    <img class="CardProfile-thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                    <div class="CardProfile-thumb-text">
                        <h3 class="CardProfile-thumb-title">kim Cattrall</h3>
                        <span class="CardProfile-thumb-status">3 hours ago</span>
                    </div>  
                </div>

            </div>
        </div>
    );
}

export default CardProfile;