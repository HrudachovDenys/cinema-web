import { Popover, Input } from 'antd';
import { CheckOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

interface ToBookPopoverProps {
  children: React.ReactNode;
  place: number;
  toBookPlace: (number, string) => void;
}

export const ToBookPopover: React.FC<ToBookPopoverProps> = ({
  children,
  place,
  toBookPlace,
}: ToBookPopoverProps) => {
  const [username, setUsername] = useState('');

  return (
    <Popover
      title={`Book ${place} place`}
      content={
        <Input.Search
          prefix={<UserOutlined />}
          placeholder="Your name?"
          value={username}
          onChange={e => setUsername(e.target.value)}
          onSearch={() => toBookPlace(place, username)}
          enterButton={<CheckOutlined />}
        />
      }
      trigger="click"
    >
      {children}
    </Popover>
  );
};
