import styled from 'styled-components'

export const AvatarContainer = styled.div`
    position: absolute;
    top: 0;
    right: 50px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    z-index: 99;

    div {
        position: absolute;
        bottom: -220px;
        left: 0;
        transform: translate(20px);
        width: 100%;
        min-height: 200px;
        background-color: transparent;
        transition: all .5s ease-out;
        visibility: hidden;
        pointer-events: none;
        padding: 10px;
        
        
    }
    
    :hover div {
        transform: translate(0);
        visibility: visible;
        pointer-events: auto;
    }

`;

export const AvatarBox = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;




/*
export const AvatarContainer = styled.div`
    position: absolute;
    top: 0;
    right: 50px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    z-index: 99;

    ul {
        position: absolute;
        bottom: -200px;
        left: 0;
        transform: translate(30px);
        width: 100%;
        min-height: 200px;
        background-color: transparent;
        transition: all .5s ease-out;
        visibility: hidden;
        pointer-events: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 10px;
       
       li {
            width: 100%;
            height: 50px;
            transition: all .3s ease-out;
            visibility: hidden;
            display: flex;
            align-items: center;
            background-color: #394248;
            justify-content: space-evenly;
            border-radius: 5px;

            svg {
                font-size: 26px;
                margin-left: 10px;
                color: #E3E4E4;
            }

            p {
                font-size: .8rem;
            }

            ul {
                transform: translate(-50%);
            }
       }

       li:hover {
            transform: scale(0.9);
       }
    }

    :hover ul {
        transform: translate(0);
        visibility: visible;
        pointer-events: auto;
    }

    :hover ul li{
        visibility: visible;
    }
`;

export const AvatarBox = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;



*/
