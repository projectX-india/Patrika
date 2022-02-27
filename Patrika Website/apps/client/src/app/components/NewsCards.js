/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/NewsCards.css';

/* Component import */
import Card from './Card';

/* Asset imports */

function NewsCards({posts,postCount}){

    return(
        <div className='NewsCards'>
            {posts.map((post)=>  <Card key={post.id} post={post}/>)}
        </div>
    );
}

export default NewsCards;