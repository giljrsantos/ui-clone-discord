import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessege';

const ChannelData: React.FC = () => {

  const messegesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {

    const div = messegesRef.current;
    
    if (div) {
      div.scrollTop = div.scrollHeight;
    }

  }, [messegesRef]);


  return (
      <Container>

        <Messages ref={messegesRef}>

          {Array.from(Array(15).keys()).map((n) => (

            <ChannelMessage
              key={n}
              author="Gilberto Junior"
              date="30/03/1987"
              content="Hoje é o meu aniversario"
            />

          ))}



          <ChannelMessage 
            author="Joerlan Santos"
            date="30/03/2020"
            content={
              <>
                <Mention>@Gilberto Junior</Mention>, me carrega no LoL e CS de novo por favor?
              </>
            }
            hasMention
            isBot
          />
        </Messages>

        <InputWrapper>
          <Input type="text" placeholder="Conversar em #chat-livre!" />
          <InputIcon />
        </InputWrapper>

      </Container>
  );
}

export default ChannelData;