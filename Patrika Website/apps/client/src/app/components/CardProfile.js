/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/CardProfile.css';

/* Component import */

/* Asset imports */

function CardProfile(){

    return(
        <div className='CardProfile'>
            <img src="https://i.imgur.com/2DhmtJ4.jpg" className="CardProfile-cover" alt="" />
            <div className='CardProfile-overlay'>
                <div className='CardProfile-header'>
                    <svg className="CardProfile-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    <div className='CardProfile-thumb-container'>
                        <img className="CardProfile-thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                        <div className="CardProfile-thumb-text">
                            <h3 className="CardProfile-thumb-title">
                                kim Cattrall
                            </h3>
                            <span
                            className="CardProfile-thumb-status">
                                3 hours ago
                            </span>
                        </div>
                    </div>
                </div>
                <p className='CardProfile-bio'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
                </p>
            </div>
        </div>
    );
}

export default CardProfile;