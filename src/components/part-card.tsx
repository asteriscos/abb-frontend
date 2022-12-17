import React from 'react';
import { FeatureCard } from './feature-card';
import { Part } from '../types';
import './part-card.scss';

interface PartCardProps {
  part: Part
}

export const PartCard = ({ part }: PartCardProps) => {
  return (
    <div className="part-card">
      <h3 className="font-16-black text-ellipsis">{part.name}</h3>
      <div className="part-body">
        {part.features?.map((feature, key) => (
          <FeatureCard key={key} feature={feature} />
        ))}
      </div>
    </div>
  )
}