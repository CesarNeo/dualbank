import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 44px;
    left: 48px;
    display: flex;
    align-items: center;
    position: absolute;

    background: #F9F9F9;

    box-shadow: 0 3px 4px -3px  rgba(0, 0, 0, 0.25);
`;

export const ButtonTopMenu = styled.button`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;

    background: linear-gradient(#FFFFFF, #E5E4E2);

    border-radius: 50%;
`;

export const Wallet = styled.div`
    display: flex;
    margin-left: 2rem;
`;

export const ProfileTopMenu = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background: linear-gradient(#622EE5, #172765);

    border-radius: 50%;

    span {
        color: #fff;
        font-size: 1.1rem;
    }
`;

export const WalletContent = styled.div` 
    margin-left: 0.63rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5 {
            color: #172765;
            font-weight: 400;
        }

        svg {
            margin-left: 0.82rem;
        }
    }

    span {
            color: var(--text-positive);
            font-size: 0.88rem;
            margin-right: 0.94rem;
        }
`;