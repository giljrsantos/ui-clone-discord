import React from 'react';

import { Container, Avatar, Messege, Header, Content } from './styles';
export { Mention } from './styles';

export interface Props{
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessege: React.FC<Props> =({
    author,
    date,
    content,
    hasMention,
    isBot,
}) => {
    return (
    <Container className={hasMention ? 'mention' : ''}>
        
        <Avatar className={isBot ? 'bot' : ''} />
        
        <Messege>
            <Header>
                <strong>{author}</strong>
                {isBot && <span>Bot</span>}
                <time>{date}</time>
            </Header>
            <Content>{content}</Content>
        </Messege>

    </Container>
);

};

export default ChannelMessege;