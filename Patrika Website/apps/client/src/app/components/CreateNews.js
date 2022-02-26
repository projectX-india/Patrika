/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/CreateNews.css';

/* Component import */

/* Asset imports */

function CreateNews(){

    const textInput = {
            type:"text",
            value:""
    };
    
    const [inputArray, setInputArray] = useState([textInput]);

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
            <button onClick={() => addParagraphSection()}>
                ADD PARAGRAPH
            </button><br/>
            <button
                onClick={() => addFileSection()}
            >
                ADD FILE
            </button><br/>
            <button>ADD IMAGE</button>
            {
                inputArray.map((item,i) => {
                    return(
                        <input
                            onChange={handleChange}
                            value={item.value}
                            id={i}
                            type={item.type}
                        />
                    )
                })
            }
        </div>
    );
}

export default CreateNews;