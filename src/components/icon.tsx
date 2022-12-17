import React from 'react';
import { ReactComponent as Check } from '../assets/check.svg';
import { ReactComponent as Error } from '../assets/error.svg';
import { ReactComponent as Warning } from '../assets/warning.svg';
import { ReactComponent as Circle } from '../assets/circle.svg';
import { ReactComponent as Ellipsis } from '../assets/button.svg';
import { State } from '../types';
import './icon.scss';

interface IconProps {
  type: State | 'circle' | 'ellipsis'
  color?: string,
  className?: string
}

export const Icon = ({ type, className = '', color = '' }: IconProps) => {
  const icon = {
    check: Check,
    error: Error,
    warning: Warning,
    circle: Circle,
    ellipsis: Ellipsis,
  }
  return React.createElement(icon[type], {
    className: `icon ${className}`,
    fill: color
  })
}