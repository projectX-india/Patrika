/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/NewsCards.css';

/* Component import */
import Card from './Card';

/* Asset imports */

function NewsCards(){

    return(
        <div className='NewsCards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default NewsCards;