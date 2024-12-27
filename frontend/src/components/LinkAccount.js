import {useEffect, useState } from 'react';
import {usePlaidLink} from 'react-plaid-link';

const LinkAccount = ()=>{

    const [linkToken, setLinkToken] = useState(null);
    const [linkButton,setLinkButton] = useState(true);

    const {open, ready}=usePlaidLink({
        token:linkToken,
        onSuccess:(public_token,metadata)=>{
            fetch('http://localhost:3000/plaid/public_token_exchange',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({public_token:public_token})
            }).then((response)=>console.log(response.ok));
        }
    })

    useEffect(()=>{
        fetch('http://localhost:3000/plaid/create_link',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',

            },
        }).then((response)=>{
            return response.json()}
        ).then((data)=>{
            setLinkToken(data.link_token);
            setLinkButton(false);
        });
    },[]);

    return (
        <>
            <button disabled={linkButton} onClick={()=>open()}> Link Account </button>
        </>
    )
}

export default LinkAccount;