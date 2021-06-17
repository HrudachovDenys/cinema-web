import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper: React.FC<any> = styled(Card)`
  .ant-card-body {
    display: none;
  }

  &.ant-card-bordered {
    border: ${({ theme, selected }: { theme: Record<string, any>; selected: boolean }) =>
      selected ? `4px solid ${theme.colors.aqua}` : 'none'};
  }
`;

interface MovieCardProps {
  selected: boolean;
  name: string;
  image: string;
}

export const MovieCard: React.FC<any> = ({ selected, name, image }: MovieCardProps) => (
  <Wrapper hoverable cover={<img alt={name} src={image} />} selected={selected} />
);
