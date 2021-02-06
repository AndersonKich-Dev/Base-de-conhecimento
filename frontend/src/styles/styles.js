import styled from 'styled-components'


export const ViewLogin = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1A1D20;
    display: flex;
    align-items: center;
    padding: 0 80px;
`;

export const LoginFolder = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px; 

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;


export const LoginForm = styled.div`
    width: 40%;
    height: 80%;
    background-color: #1C1E21;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px; 
    padding: 50px;

    form {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;

        button {
            width: 100%;
            height: 50px;
            background-color: #5268F4;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            color: #E3E4E4;
            border: 2px solid #4D61E3;
            font-size: 1.1rem;
            opacity: 0.7;
            transition: all .5s ease-in-out;
            cursor: pointer;
        }

        button:hover{
            border: 2px solid #fff;
        }
       
    }

    span {
         color: #4D61E0;
         cursor: pointer;
    }
`;

export const InputFormBox = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid #292D31;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    svg {
        color: #E3E4E4;
        font-size: 20px;
        margin-left: 20px;
    }

    input {
        width: 85%;
        height: 100%;
        border: none;
        background-color: #1C1E21;
        color: #E3E4E4;
    }

    &:hover{
        border: 2px solid #4050AD;
    }
`;

export const FormTitle = styled.div`
    width: 100%;
    height: 20%;
    color: #E3E4E4;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h1 {
        text-transform: uppercase;
    }
   
   p {
       margin: 20px 0;
       font-size: 1.5rem;
   }
`;

export const InputFormCheckboxCheckbox = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    p {
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
    }
    
`;

export const InputFormCheckbox = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #5268F4;
    cursor: pointer;
`;

export const Checkbox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    opacity: ${props=>props.display};
    z-index: 99;
    cursor: pointer;
    
    :after {
        content: '';
        position: absolute;
        top: 53%;
        left: 11%;
        transform: translate(-50%, -50%);
        transform: rotate(45deg);
        width: 31%;
        height: 2px;
        background-color: #fff;
    }

    :before {
        content: '';
        position: absolute;
        top: 45%;
        left: 30%;
        transform: translate(-50%, -50%);
        transform: rotate(130deg);
        width: 60%;
        height: 2px;
        background-color: #fff;
    }
`;



