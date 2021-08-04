import styled from "styled-components";

export const Main = styled.main`
    display: flex;
`;

export const Content = styled.div`
    margin-top: 44px;
    padding: 1.25rem 2.125rem;
`;

export const BankBalance = styled.div`
    display: flex;
    align-items: center;

    h1 {
        font: 600 1.3rem 'Raleway', sans-serif;
        color: #172765;
    }
`;

export const ButtonBankBalance = styled.button`
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.94rem;

    border: 1px solid var(--purple-primary);
    border-radius: 5px;

    color: var(--purple-primary);

    &:hover {
        background: linear-gradient(230deg, #622EE5, #A683FF);
        border-color: #fff;
        color: #fff;
    }
`;

export const Balance = styled.div`
    width: 280px;
    margin-top: 2.75rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.375rem 1rem;

        border: 1px solid #E5E4E2;
        border-bottom: 1px solid var(--purple-primary);
        border-radius: 5px 5px 0 0px;

        div {
            h4 {
                font-size: 0.75rem;
                font-weight: 400;
                color: var(--purple-primary);
            }
        }
    }

    main {
        display: flex;
        align-items: center;
        padding: 0.625rem 1rem;
        font-size: 0.875rem;

        svg {
            margin-left: 0.813rem;
        }
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.375rem 1rem;
        margin-top: 0.4rem;

        border: 1px solid #E5E4E2;
        border-bottom: 1px solid #778899;
        border-radius: 5px 5px 0 0px;

        > div {
            display: flex;
            align-items: center;

            div {
                margin-left: 0.813rem;
                h4 {
                    font-weight: 400;
                    font-size: 0.75rem;
                    color: #778899;
                }
            }
        }

        span {
            color: var(--text-positive);
        }   
    }
`;
