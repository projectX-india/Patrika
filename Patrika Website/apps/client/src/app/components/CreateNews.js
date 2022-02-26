/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/CreateNews.css';

/* Component import */

/* Asset imports */
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function CreateNews(){

    const textInput = {
            type:"text",
            value:""
    };
    
    const [inputArray, setInputArray] = useState([textInput]);
    const [headline, setHeadline] = useState('');

    const addParagraphSection = () => {
        setInputArray( inputArray => {
            return [
                ...inputArray,
                {
                    type:"text",
                    value:""
                }
            ];
        });
    };

    const addFileSection = () => {
        setInputArray( inputArray => {
            return [
                ...inputArray,
                {
                    type:"file",
                    value:""
                }
            ];
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const index = e.target.id;
        setInputArray(s=>{
            const newArr = s.slice();
            newArr[index].value=e.target.value;
            return newArr;
        });
    };

    return(
        <div className='CreateNews'>

            
            {/* <button onClick={() => addParagraphSection()}>
                ADD PARAGRAPH
            </button><br/>
            <button
                onClick={() => addFileSection()}
            >
                ADD FILE
            </button><br/> */}
            <input 
                type="text" 
                className='text-input'
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder='Headline...'
            />
            {
                inputArray.map((item,i) => {
                    if(item.type == 'text'){
                        return(
                            <textarea
                                className='text-input'
                                onChange={handleChange}
                                value={item.value}
                                id={i}
                                type={item.type}
                                placeholder='Type text here...'
                                rows={"10"}
                            />
                        )
                    }else{
                        return(
                            <div className='image-holder'>
                                <input
                                    className='img-input'
                                    onChange={handleChange}
                                    value={item.value}
                                    id={i}
                                    type={item.type}
                                />
                            </div>
                            
                        )
                    }
                })
            }
            <div className='Create-options'>
                <AddBoxIcon
                    onClick={()=>addParagraphSection()}
                />
                <AddPhotoAlternateIcon
                    onClick={()=>addFileSection()}
                />
            </div>
            <div className="submit-section">
                <button>
                    POST ARTICLE
                </button>
            </div>
        </div>
    );
}

export default CreateNews;