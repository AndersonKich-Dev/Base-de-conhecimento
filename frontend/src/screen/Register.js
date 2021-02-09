import React, { useState } from 'react'
import image from '../assets/te1.jpg'
import { FaEnvelope, FaUser, FaLock, FaTimes } from "react-icons/fa";
import { ViewRegister, RegisterFolder, RegisterForm, InputFormBox, FormTitle, ModalRegister, BackIconModal, InputModalBox} from '../styles/styles-register'
import Toastify from '../services/Toastify'
import {Link} from 'react-router-dom';
import api from '../services/api'

export default function App(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')

  const clearInputsForms =()=>{
    setName('')
    setEmail('')
    setPassword('')
    setComfirmPassword('')
  }


  async function handleRegister(e){
    e.preventDefault();

    const data ={
        name,
        email,
        password,
        comfirmPassword,
    }

    try{
      const response = await api.post('/signup', data)
        Toastify({type:'success', message:'Parabens! Voce foi cadastrado com sucesso.'})
        clearInputsForms()
    }catch(err){
        Toastify({type:'error', message:`${err.response.data}`})
    }        

  }

  

  return(
    <ViewRegister>
      <RegisterFolder>
        <img src={image} alt=''/>
      </RegisterFolder>

      <RegisterForm color={'#1C1E21'}>
          <form onSubmit={handleRegister}>
            <FormTitle>
                <h1>KNOWLEDGE BASE</h1>
                <p>Create Account</p>
            </FormTitle>

            <InputFormBox>
               <FaEnvelope/>
               <input type='email'
                      placeholder='E-mail'
                      value={email}
                      onChange={e => setEmail(e.target.value)}/>
            </InputFormBox>

            <InputFormBox>
              <FaUser/>
              <input type='text'
                      placeholder='Username'
                      value={name}
                      onChange={e => setName(e.target.value)}/>
            </InputFormBox>

            <InputFormBox>
              <FaLock/>
              <input type='password'
                      placeholder='Password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}/>
            </InputFormBox>

            <InputFormBox>
              <FaLock/>
              <input type='password'
                      placeholder='Comfirme Password'
                      value={comfirmPassword}
                      onChange={e => setComfirmPassword(e.target.value)}/>
            </InputFormBox>
            <button>Submit</button>
          </form>
          <p>Already a member ? <Link to='/signin'><strong>Login</strong></Link></p>
      </RegisterForm>
    
       <Toastify/>
    </ViewRegister>
  )
}