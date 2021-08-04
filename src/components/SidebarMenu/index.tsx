import { ReactElement } from "react";
import {
    BiHome,
    BiPieChartAlt2,
    BiMoney,
    BiCreditCard,
    BiWrench,
    BiHelpCircle,
    BiChevronRight
} from 'react-icons/bi';
import { RiLineChartLine, RiHonourLine, RiHandCoinLine } from 'react-icons/ri';
import { BsXDiamond } from 'react-icons/bs';

import { SidebarMenuItem } from "./SidebarMenuItem";

import { Container, ButtonSidebar } from "./styles";

export function SidebarMenu(): ReactElement {
    return (
        <Container>
            <SidebarMenuItem icon={BiHome} />
            <SidebarMenuItem icon={BiPieChartAlt2} />
            <SidebarMenuItem icon={RiLineChartLine} />
            <SidebarMenuItem icon={BiMoney} />
            <SidebarMenuItem icon={RiHandCoinLine} />
            <SidebarMenuItem icon={BsXDiamond} />
            <SidebarMenuItem icon={BiCreditCard} />
            <SidebarMenuItem icon={RiHonourLine} />
            <SidebarMenuItem icon={BiWrench} />
            <SidebarMenuItem icon={BiHelpCircle} />
            <ButtonSidebar type="button">
                <BiChevronRight size={40} />
            </ButtonSidebar>
        </Container>
    );
}