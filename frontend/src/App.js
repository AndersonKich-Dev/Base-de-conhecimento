import React, { useState } from 'react'
import image from './assets/te1.jpg'
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { ViewLogin, LoginFolder, LoginForm, InputFormBox, FormTitle, InputFormCheckbox, Checkbox, InputFormCheckboxCheckbox} from './styles/styles'
import Toastify from './services/Toastify'
import api from './services/api'

export default function App(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')

 

  const setInputs =()=>{
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
        setInputs()
    }catch(err){
        Toastify({type:'error', message:`${err.response.data}`})
    }        

  }


  return(
    <ViewLogin>
      <LoginFolder>
        <img src={image} alt=''/>
      </LoginFolder>

      <LoginForm>
          <form onSubmit={handleRegister}>
            <FormTitle>
                <h1>Base de Conhecimento</h1>
                <p>Seja bem vindo</p>
            </FormTitle>

            <InputFormBox>
               <FaEnvelope/>
               <input type='email'
                      placeholder='Digite seu e-mail'
                      value={email}
                      onChange={e => setEmail(e.target.value)}/>
            </InputFormBox>

            <InputFormBox>
              <FaUser/>
              <input type='text'
                      placeholder='Digite seu nome completo'
                      value={name}
                      onChange={e => setName(e.target.value)}/>
            </InputFormBox>

            <InputFormBox>
              <FaLock/>
              <input type='password'
                      placeholder='Digite sua senha'
                      value={password}
                      onChange={e => setPassword(e.target.value)}/>
            </InputFormBox>

            <InputFormBox>
              <FaLock/>
              <input type='password'
                      placeholder='Digite sua senha novamente'
                      value={comfirmPassword}
                      onChange={e => setComfirmPassword(e.target.value)}/>
            </InputFormBox>
            <button>Comfirmar cadastro</button>
          </form>
          <p>Já é membro ? <span>Login</span></p>
      </LoginForm>
       <Toastify/>
    </ViewLogin>
  )
}