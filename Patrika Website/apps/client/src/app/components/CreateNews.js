/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/CreateNews.css';

/* Component import */
import IPFSclient from './IpfsClient';

/* Asset imports */
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function CreateNews({newsContract,account}){

    const textInput = {
            type:"text",
            value:"",
    };
    
    const [inputArray, setInputArray] = useState([textInput]);
    const [headline, setHeadline] = useState('');
    const [imageBuffer, setImageBuffer] = useState([])

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




    const handleChange = async(e) => {
        e.preventDefault();
        const index = e.target.id;
        setInputArray(s=>{
            const newArr = s.slice();
            if(newArr[index].type=="text")
                newArr[index].value=e.target.value;
            else if(newArr[index].type=="file"){
                console.log("file aai hai")
                e.preventDefault()
                const file = e.target.files[0]
                const reader = new FileReader();
                reader.readAsArrayBuffer(file)
                reader.onloadend = () => {
                    setImageBuffer([...imageBuffer,reader.result]);
                }
                // console.log(imageBuffer)
                // newArr[index].value=imageBuffer;
            }
            return newArr;
        });
    };


    const submitForm = async() => {
        let index = 0;
        let summaryHash = "";
        let contentHash = "";
        for (let i in inputArray) {
            let input = inputArray[i];
            let hash=''
            if(input.type=='text'){
                const textHash = await IPFSclient.add(input.value);
                hash=`<<paragraph:${textHash.path}>>\n`
            }
            else if(input.type=='file'){
                if(index<imageBuffer.length){
                    let imgBuf = imageBuffer[index++];
                    const fileHash = await IPFSclient.add(imgBuf);
                    hash=`<<image:${fileHash.path}>>\n`
                }
            }
            contentHash+=hash;
        }
        const titleHash = await IPFSclient.add(headline);
        summaryHash = titleHash.path;
        console.log(contentHash);
        console.log(summaryHash);


        try{
            const created = await IPFSclient.add(imageBuffer);
			console.log(created);
            newsContract.methods.createPost(
                contentHash,
                summaryHash,
                true
            ).send({
                from:account
            }).on('transactionHash', (hash) => {
                setImageBuffer([]);
                setHeadline();
                setInputArray([textInput]);
            })
        }catch(error){
            alert(error);
        }
        
    };


    return(
        <div className='CreateNews'>
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
                <button onClick={submitForm}>
                    POST ARTICLE
                </button>
            </div>
        </div>
    );
}

export default CreateNews;