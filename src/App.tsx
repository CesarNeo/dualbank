import { BiPrinter, BiImport, BiShareAlt, BiChevronDown, BiRevision, BiCheckShield, BiShow } from 'react-icons/bi';

import { Header } from './components/Header';
import { SidebarMenu } from './components/SidebarMenu';
import { TopMenu } from './components/TopMenu';

import { Main, Content, BankBalance, ButtonBankBalance, Balance } from './styles/app';

import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <Header />
      <Main>
        <SidebarMenu />
        <TopMenu />
        <Content>
          <BankBalance>
            <h1>Saldo Bancário</h1>
            <ButtonBankBalance>
              <BiPrinter size={20} />
            </ButtonBankBalance>
            <ButtonBankBalance>
              <BiImport size={20} />
            </ButtonBankBalance>
            <ButtonBankBalance>
              <BiShareAlt size={20} />
            </ButtonBankBalance>
          </BankBalance>
          <Balance>
            <header>
              <div>
                <h4>Data do Saldo</h4>
                <span>07/12/2020</span>
              </div>
              <BiChevronDown size={35} />
            </header>
            <main>
              <p>Saldo atualizado às 16:48</p>
              <BiRevision size={25} />
            </main>
            <footer>
              <div>
                <BiCheckShield size={25} />
                <div>
                  <h4>Saldo disponível</h4>
                  <span>R$40.000,00</span>
                </div>
              </div>
              <BiShow size={25} />
            </footer>
          </Balance>
        </Content>
      </Main>
      <GlobalStyle />
    </>
  );
}

export default App;
