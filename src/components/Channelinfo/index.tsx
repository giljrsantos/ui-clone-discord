import React from 'react';

import { Container, Title, HashtagIcon, Separator, Description } from './styles';


const ChanneInfo: React.FC =() => {
    return (
    <Container>
        <HashtagIcon />
        <Title>chat-livre</Title>

        <Separator />

        <Description>Canal Aberto para Conversas</Description>

    </Container>
);

};

export default ChanneInfo;