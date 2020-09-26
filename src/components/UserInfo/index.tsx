import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettinsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
      <Container>
          <Profile>
            <Avatar />
            <UserData>
                <strong>Gilberto Jr</strong>
                <span>#23562</span>
            </UserData>
          </Profile>

          <Icons>
              <MicIcon />
              <HeadphoneIcon />
              <SettinsIcon />
          </Icons>
      </Container>
  );
}

export default UserInfo;