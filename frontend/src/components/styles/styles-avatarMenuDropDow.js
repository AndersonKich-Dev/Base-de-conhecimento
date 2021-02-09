import styled from 'styled-components'

export const MenuDropDow = styled.ul`
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
       
    li {
        position: relative;
        width: 100%;
        height: 50px;
        transition: all .3s ease-out;
        display: flex;
        align-items: center;
        background-color: #394248;
        justify-content: flex-start;
        border-radius: 5px;
    
        svg {
            font-size: 26px;
            margin-left: 10px;
            color: #E3E4E4;
        }

        p {
            font-size: .8rem;
            margin-left: 20px
        }

        ul{
            position: absolute;
            top: 0;
            left: -240px;
            width: 250px;
            height: 200px;
            visibility: hidden;
            opacity: 0;
            background-color: transparent;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

        } 

        :hover ul{
            
            padding-right: 50px;
            visibility: visible;
            opacity: 1;
        }
       
        
    }

   

    li:hover {
        transform: scale(0.9);
    }


`; 