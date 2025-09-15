import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';
import { AppGradientProps } from '@/types/ComponentProps';

const AppGradient = ({ children, colors }: AppGradientProps) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
