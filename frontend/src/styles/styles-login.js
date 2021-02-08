import styled from 'styled-components'


export const ViewLogin = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #242D34;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px;

    @media screen and (min-width: 768px) and (max-width: 1024px){
       padding: 40px;
    }
`;

export const FormLogin = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: -1px 1px 11px 3px rgba(0,0,0,0.84);
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-attachment: fixed;
    background-position: center right;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 40px;

    form {
        width: 40%;
        height: 90%;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;

        input {
            width: 100%;
            height: 40px;
            background-color: #fff;
            opacity: 0.6;
            border: none;
            border-bottom: 4px solid #01A1FF;
            padding-left: 10px;
            transition: all .5s ease-out;
        }

        input:hover {
            opacity: 0.9;
        }

        h2 {
            letter-spacing: 3px;
            font-weight: 400;
            
        }

        button {
            width: 30%;
            height: 40px;
            border-radius: 8px;
            background-color: #01A1FF;
            border: none;
            color: #fff;
            cursor: pointer;
            transition: all .5s ease-out;
        }

        button:hover {
            transform: scale(0.9)
        }

        p{
            font-size:1rem;
        }

        a:link 
        { 
        text-decoration:none; 
        } 

        strong {
            color: #4D61E0;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
      form {
          width: 55%;

          p{
            font-size:0.8rem;
        }
      }
    }
`;

export const FormLoginTarja = styled.div`
    position: absolute;
    top: 0;
    right: 90px;
    width: 25%;
    height: 100%;
    z-index: 99;
    padding: 90px 0;
    background-color: rgba(68,79,85,0.7);

    div {
        width: 100%;
        height: 100%;
        background-color: #01A1FF;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;

        h1,p {
            font-size: 1.4rem;
            color: #FFF9F8;
            letter-spacing: 5px;
            text-transform: uppercase;
            font-weight: 400;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        right: 40px;
        width: 30%;
        padding: 40px 0;

        div {
            h1,p {
            font-size: 1rem;
            }
        }
    }

`;