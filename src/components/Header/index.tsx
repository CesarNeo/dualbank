import {
    BiChevronDown,
    BiShow,
    BiCommentDetail,
    BiCalendar,
    BiBell,
    BiSearch
} from 'react-icons/bi';
import { RiFileCopyLine } from 'react-icons/ri';

import {
    Container,
    Content,
    ContentLeft,
    ContentRight,
    CheckingAccount,
    Balance,
    ImageLogo,
    ContainerInputHeader,
    Perfil,
    HeaderNotifications,
    DropdownCheckingAccount,
    Account
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import { useState } from 'react';

export function Header() {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <Container>
            <Content>
                <ContentLeft>
                    <ImageLogo>
                        <img src={logoImg} alt="Dualbank" />
                    </ImageLogo>
                    <CheckingAccount>
                        <div>
                            <h1>Conta Corrente</h1>
                            <button type="button" onClick={() => setOpenDropdown(!openDropdown)}>
                                <BiChevronDown size={16} />

                                {openDropdown && (
                                    <DropdownCheckingAccount>
                                        <Account>
                                            <h2>Conta Corrente</h2>
                                            <div>
                                                <span>Ag. 00005-1</span>
                                                <span>C.C. 00000000000000000020-1</span>
                                            </div>
                                        </Account>
                                        <Account>
                                            <h2>Conta Poupança</h2>
                                            <div>
                                                <span>Ag. 00005-1</span>
                                                <span>C.C. 01010010001000010000-2</span>
                                            </div>
                                        </Account>
                                        <Account>
                                            <h2>C.C. Ed. Suzano</h2>
                                            <div>
                                                <span>Ag. 00005-1</span>
                                                <span>C.C. 000000000000015-1</span>
                                            </div>
                                        </Account>
                                        <Account>
                                            <h2>C.C. Condomínio Guillermo</h2>
                                            <div>
                                                <span>Ag. 00005-1</span>
                                                <span>C.C. 00000000000000017-1</span>
                                            </div>
                                        </Account>
                                    </DropdownCheckingAccount>
                                )}
                            </button>
                        </div>
                        <div>
                            <span>Ag. 00005-1</span>
                            <span>C.C. 00000000000000000020-1</span>
                            <button type="button">
                                <RiFileCopyLine size={16} />
                            </button>
                        </div>
                    </CheckingAccount>

                    <Balance>
                        <div>
                            <h2>Saldo</h2>
                            <button type="button">
                                <BiShow size={16} />
                            </button>
                        </div>
                        <span>R$40.000,00</span>
                    </Balance>
                </ContentLeft>
                <ContentRight>
                    <ContainerInputHeader>
                        <input type="text" placeholder="Pesquisar" />
                        <BiSearch size={16} />
                    </ContainerInputHeader>
                    <HeaderNotifications>
                        <button type="button">
                            <BiCommentDetail size={21} />
                        </button>
                        <button type="button">
                            <BiCalendar size={21} />
                        </button>
                        <button type="button">
                            <BiBell size={21} />
                        </button>
                    </HeaderNotifications>
                    <Perfil></Perfil>
                </ContentRight>
            </Content>
        </Container>
    );
}