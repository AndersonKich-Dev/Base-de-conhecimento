import styled from 'styled-components'


export const MenuContainer = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 10vw;
    height: calc(100vh - 120px);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

   h3 {
       font-family: Verdana, Geneva, Tahoma, sans-serif;
       font-weight: 400;
       letter-spacing: 3px;
       color: #06AE97;
   }

   ul {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        li {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            transform: translate(10px);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            transition: all .5s ease-in-out;
            z-index: 99;
            

            span {
                position: absolute;
                top: 50%;
                left: 10%;
                transform: translate(-50%, -50%);
                margin-left:10px;
                width: 55px;
                height: 55px;
                border-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #0A070E;
            }

            svg{
                font-size: 2rem;
            }

            p{
                transition: all .5s ease-in-out;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
               
            }
        }

        li:hover{
            width: 250px;
            border-radius: 30px;
            transform: translate(70px);
            background-color: #02C3A8;
        }

        li:hover p{
           opacity: 1;
        }

        li:nth-child(1){
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            border: none;
            align-items: center;
            justify-content: center;
            background-color: #02C3A8;
            transform: translate(0);
            
            svg {
                margin-left: 0;
            }
            
        }
}

    
`;

/*
  width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all .5s ease-in-out;
            z-index: 99;

            svg{
                font-size: 2rem;
            }
*/