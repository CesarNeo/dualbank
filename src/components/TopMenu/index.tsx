import { ReactElement } from "react";
import { BiPurchaseTag, BiShow } from 'react-icons/bi';

import { Container, ButtonTopMenu, Wallet, ProfileTopMenu, WalletContent } from './styles';

export function TopMenu(): ReactElement {
    return (
        <Container>
            <ButtonTopMenu>
                <BiPurchaseTag size={20} />
            </ButtonTopMenu>
            <ButtonTopMenu>
                <BiPurchaseTag size={20} />
            </ButtonTopMenu>
            <Wallet>
                <ProfileTopMenu>
                    <span>P</span>
                </ProfileTopMenu>
                <WalletContent>
                    <div>
                        <h5>Principal</h5>
                        <BiShow size={15} />
                    </div>
                    <span>R$10.000,00</span>
                </WalletContent>
            </Wallet>
            <Wallet>
                <ProfileTopMenu>
                    <span>A</span>
                </ProfileTopMenu>
                <WalletContent>
                    <div>
                        <h5>Aluguel</h5>
                        <BiShow size={15} />
                    </div>
                    <span>R$1.600,00</span>
                </WalletContent>
            </Wallet>
            <Wallet>
                <ProfileTopMenu>
                    <span>A</span>
                </ProfileTopMenu>
                <WalletContent>
                    <div>
                        <h5>Alimentação</h5>
                        <BiShow size={15} />
                    </div>
                    <span>R$450,00</span>
                </WalletContent>
            </Wallet>
        </Container>
    );
}