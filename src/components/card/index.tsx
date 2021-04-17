import React from 'react';

import { CardItem } from './styles';

interface CardProps {
    bgColor: string;
    height: number;
    width: number;
}

const Card: React.FC<CardProps> = ({bgColor, height, width, children}) => {
  return <CardItem bgColor={bgColor} width={width} height={height}>{children}</CardItem>;
}

export default Card;