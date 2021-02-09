import React, { useState } from 'react'
import Toastify from '../services/Toastify'
import { ViewLogin, FormLogin, FormLoginTarja } from '../styles/styles-login'
import api from '../services/api'
import background from '../assets/loginBackground.jpg'
import {Link, useHistory} from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        const data={
            email,
            password
        }
    
        try{
            const response = await api.post('/signin', data)
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('token',`bearer ${ response.data.token}`);
            localStorage.setItem('admin', response.data.admin);
            
            history.push('/app/dashboard');
            
        }catch(err){
            Toastify({type:'error', message:`${err.response.data}`})
        }
       
    }

    return(
        <ViewLogin>
            <FormLogin background={background}>
                <form onSubmit={handleLogin}>
                    <h2>welcome back</h2>
                    <input type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>

                    <input type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                    <button>Sign in</button>
                    <p>Don't Have an account...? <Link to='/'><strong>Sign Up Here</strong></Link></p>
                </form>
            </FormLogin>
            <FormLoginTarja>
                <div>
                    <h1>knowledge base</h1>
                    <p>SIGNIN</p>
                </div>
            </FormLoginTarja>
        </ViewLogin>
    )
}




/*
 <ModalLogin activeModal={displayModal}>      
        <form onSubmit={handleLogin}>
          <BackIconModal onClick={viewModalLogin}>
            <FaTimes/>
          </BackIconModal>
        <h1>Bem vindo de volta!</h1>
            <InputModalBox>
               <FaEnvelope/>
               <input type='email'
                      placeholder='Digite seu e-mail'
                      value={email}
                      onChange={e => setEmail(e.target.value)}/>
            </InputModalBox>

            <InputModalBox>
              <FaLock/>
              <input type='password'
                      placeholder='Digite sua senha'
                      value={password}
                      onChange={e => setPassword(e.target.value)}/>
            </InputModalBox>
            <button>Logar</button>
          </form>
      </ModalLogin>
        
*/