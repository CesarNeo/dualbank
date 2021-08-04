import styled from 'styled-components';

export const Container = styled.div`
    width: 46px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;

    background: #F9F9F9;

    box-shadow: 3px 0 4px -3px  rgba(0, 0, 0, 0.25);
`;

export const ButtonSidebar = styled.button`
    width: 40px;
    height: 40px;
    top: 55%;
    left: 60%;

    position: absolute;

    background: var(--purple-primary);

    color: #fff;

    border-radius: 50%;
`;