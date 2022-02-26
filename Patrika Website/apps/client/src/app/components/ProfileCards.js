/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/ProfileCards.css';

/* Component import */
import CardProfile from './CardProfile';

/* Asset imports */

function ProfileCards(){

    return(
        <div className='ProfileCards'>
            <CardProfile/>
            <CardProfile/>
            <CardProfile/>
            <CardProfile/>
            <CardProfile/>
            <CardProfile/>
            <CardProfile/>
        </div>
    );
}

export default ProfileCards;