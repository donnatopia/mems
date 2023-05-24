import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

type ButtonVariety = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'lg';

interface ButtonProps {
  onPress: () => void;
  text: string;
  variety: ButtonVariety;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, variety, size }) => {

  const buttonBgClass = variety === 'primary' ? `bg-theme-1`: `border-2 border-theme-1`;
  const buttonTextClass = variety === 'primary' ? 'text-dark' : `text-theme-1`;

  const buttonTextSize = size === 'sm' ? 'text-sm' : 'text-lg';

  return (
    <TouchableOpacity
      className={`py-1 px-3 rounded-2xl ${buttonBgClass}`}
      onPress={ onPress }
    >
      <Text className={`font-bold text-center ${buttonTextClass} ${buttonTextSize}`}>{ text }</Text>
    </TouchableOpacity>
  )
}

export default Button