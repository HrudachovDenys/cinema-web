import { Popover, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    margin-bottom: 5px;
  }
`;

interface CancelBookingPopoverProps {
  children: React.ReactNode;
  username: string;
  cancelBooking: () => void;
}

export const CancelBookingPopover: React.FC<CancelBookingPopoverProps> = ({
  children,
  username,
  cancelBooking,
}: CancelBookingPopoverProps) => (
  <Popover
    content={
      <Content>
        <span>Booked {username}</span>
        <Button danger type="primary" onClick={cancelBooking}>
          Cancel booking
        </Button>
      </Content>
    }
    trigger="click"
  >
    {children}
  </Popover>
);
