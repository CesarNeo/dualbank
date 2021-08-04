import { BiChevronDown, BiShow, BiCommentDetail, BiCalendar, BiBell, BiSearch } from 'react-icons/bi';
import { RiFileCopyLine } from 'react-icons/ri';

import { Container, Content, ContentLeft, ContentRight, CheckingAccount, Balance, ImageLogo, ContainerInputHeader, Perfil, HeaderNotifications } from './styles';

import logoImg from '../../assets/images/logo.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <ContentLeft>
                    <ImageLogo>
                        <img src={logoImg} alt="Dualbank" />
                    </ImageLogo>
                    <CheckingAccount>
                        <div>
                            <h1>Conta Corrent</h1>
                            <button type="button">
                                <BiChevronDown size={16} />
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
                            <BiCommentDetail size={20} />
                        </button>
                        <button type="button">
                            <BiCalendar size={20} />
                        </button>
                        <button type="button">
                            <BiBell size={20} />
                        </button>
                    </HeaderNotifications>
                    <Perfil></Perfil>
                </ContentRight>
            </Content>
        </Container>
    );
}