import { IconType } from 'react-icons';

import { Container } from './styles';

interface SidebarMenuItemProps {
    icon: IconType;
}

export function SidebarMenuItem({ icon: Icon }: SidebarMenuItemProps) {
    return (
        <Container type="button">
            <Icon size={24} />
        </Container>
    );
}