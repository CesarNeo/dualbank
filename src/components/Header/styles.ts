import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 71px;

    background: #fff;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.94rem;
`;

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const ImageLogo = styled.div`
        display: flex;
        border-right: 2px solid #E5E4E2;

        img {
            width: 130px;
            height: 21px;

            margin-right: 0.4rem;
        }
`;

export const CheckingAccount = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.22rem;

    line-height: 0.9rem;

    div {
        display: flex;
        
        h1 {
            font-weight: 400;
            font-size: 1rem;
            margin-right: 0.82rem;
        }

        button {
            position: relative;
        }
    }

    div:nth-child(2) {
        span {
            color: var(--purple-primary);
            font-size: 0.75rem;
            margin-right: 0.94rem;
        }
    }
`;

export const Balance = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.22rem;
    
    line-height: 0.9rem;

    div {
        display: flex;

        h2 {
            font-weight: 400;
            font-size: 0.75rem ;
            margin-right: 0.82rem;
        }
    }

    span {
        color: var(--text-positive);
        font-weight: 700;
    }
`;


export const ContentRight = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerInputHeader = styled.div`
    width: 160px;
    height: 30px;
    display: flex;
    align-items: center;

    border: 1px solid #778899;
    border-radius: 5px;

    input {
        width: 90%;
        height: 100%;
        padding: 0.38rem 0.38rem;

        border: none;
        border-radius: 5px;

        &::placeholder {
            color: #778899;
            font-weight: 700;
        }
    }

    svg {
        margin: 0 0.38rem;
    }
`;

export const HeaderNotifications = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.13rem;


    button {
        width: 20px;
        height: 20px;
    }

    button + button {
        margin-left: 1rem;
    }
`;

export const Perfil = styled.div`
    width: 50px;
    height: 50px;

    border: 1px solid #4C77BF;
    border-radius: 50%;
`;

export const DropdownCheckingAccount = styled.div`
    width: 276px;
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    padding: 0.375rem 1rem;
    display: flex;
    flex-direction: column;

    border-radius: 5px;

    background: #fff;
    overflow: hidden;
    box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);
`;

export const Account = styled.div`
    display: flex;
    flex-wrap: wrap;

    & + div {
        margin-top: 1.125rem;
    }

    h2 {
        font-size: 0.875rem;
        font-weight: 400;
    }

    div {
        span {
            font-size: 0.625rem !important;
        }
    }
`;