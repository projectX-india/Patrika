/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/ReadNews.css';

/* Component import */
import { Avatar } from '@mui/material';

/* Asset imports */

function ReadNews(){

    return(
        <div className='ReadNews'>
			<div className="news-article">
                <div className="newspaper">

                <div className='newspaper-headline'>
                    This is a headline 
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat eros iaculis accumsan viverra. Ut eleifend ultricies justo sit amet vestibulum. Mauris vulputate et ligula semper fermentum. Aliquam finibus metus odio, in efficitur ligula aliquam ac. Pellentesque et orci purus. Nunc sed commodo felis, et pharetra purus. Praesent sit amet consectetur dolor. Phasellus consectetur rhoncus lacinia. Donec dapibus lectus ex, eu faucibus quam euismod non. Donec sollicitudin nibh et efficitur posuere. Etiam fringilla mi id ante commodo, et sagittis sem blandit. Vestibulum nec mi in mi vulputate pharetra. Nam dignissim lacus eget congue iaculis.</p>
                <div className='newspaper-image-container'>
                    <img 
                        src="https://i.pinimg.com/originals/d9/11/96/d91196b3dc2628506dfca2e92ccbf22e.jpg" 
                        alt="image" 
                    />
                </div>
                <p>Suspendisse cursus, ligula sit amet tristique imperdiet, sem ex gravida lectus, in ultricies enim velit vel ante. Aenean lacinia tincidunt leo. Mauris facilisis pulvinar interdum. Ut non euismod eros. Vivamus porttitor lorem vitae cursus mollis. Phasellus condimentum lacus vitae mollis aliquam. Integer tincidunt ullamcorper consectetur. Praesent aliquam neque est, varius congue dolor vulputate id. Maecenas magna est, malesuada venenatis bibendum eu, euismod et nunc. Vestibulum fermentum dolor libero, vel tincidunt turpis mattis in. Duis ornare magna eu turpis interdum, eget rutrum ligula feugiat. Phasellus eget turpis nec nulla mollis tincidunt a quis nunc.</p>

                <p>Nam gravida a ante et porta. Vestibulum quis lorem ut orci blandit ullamcorper. Etiam ornare metus et ligula pharetra, et faucibus felis interdum. Sed sed aliquet ante, vitae feugiat felis. Phasellus id ipsum id nisi faucibus mattis eu et enim. Donec mauris sapien, tempus nec ornare pulvinar, posuere in lorem. Duis rhoncus quam dapibus hendrerit fermentum. Fusce mi enim, malesuada non arcu sit amet, egestas accumsan massa. Proin vel risus erat.</p>
                
                <div className='newspaper-image-container'>
                    <img 
                        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW4lMjBjb3ZlcnxlbnwwfHwwfHw%3D&w=1000&q=80" 
                        alt="image" 
                    />
                </div>

                <p>Vestibulum elementum vitae augue non interdum. Vivamus pulvinar volutpat odio ut placerat. Proin tristique eros vel nisi pretium porttitor. Nam volutpat finibus tortor eu dignissim. Curabitur ut convallis ligula, vitae posuere nunc. Aliquam ac faucibus libero, eu vulputate felis. Nunc quis sem tristique, tincidunt lacus sit amet, dapibus enim.</p>

                <p>Mauris et justo porta, aliquet metus eleifend, ullamcorper sapien. Vestibulum nec risus porttitor, tempus ante at, tristique leo. Proin placerat porttitor varius. Proin ligula tortor, facilisis sit amet mauris ac, fringilla volutpat libero. Etiam vestibulum vitae purus at maximus. Duis ac lacus velit. Fusce ante tortor, accumsan nec justo et, accumsan maximus urna. Pellentesque eu ullamcorper eros. Nam a dictum dolor. Phasellus lorem lectus, imperdiet nec diam sed, dignissim cursus lorem. Cras diam turpis, consectetur et odio ut, sodales molestie urna. Suspendisse mi neque, scelerisque id cursus ultricies, semper posuere ligula. Sed finibus diam quis rhoncus fermentum. Nunc mattis est at lacus aliquet egestas. Nunc dapibus consequat tortor congue vestibulum. Vivamus odio nisl, luctus vel est vitae, condimentum hendrerit quam.</p>

                </div>
            </div>
            <div className='profile-container'>
                <div className='profile-section'>
                        <Avatar 
                            alt="Parv Gupta" 
                            src="/static/images/avatar/1.jpg" 
                            sx={{
                                width:62,
                                height:62
                            }}
                        />

                    <div className='profile-details'>
                        <span>@parvg555</span>
                        <p>0x5943691814A0Ce8a582B2e4B64603C19Daf0F8Ae</p>
                    </div>
                </div>
                <p className='support-message'>support your faviourite reporters by donating here</p>
                <div className="donation-form">
                    <input 
                        type="text" 
                        placeholder='write amount here...'
                    />
                    <button>Donate</button>
                    <button>Liked this article?</button>
                </div>
            </div>
        </div>
    );
}

export default ReadNews;