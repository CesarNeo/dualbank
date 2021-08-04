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

    div {
        display: flex;

        h1 {
            font-weight: 400;
            font-size: 1rem;
            margin-right: 0.82rem;
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

