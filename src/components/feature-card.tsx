import React from 'react';
import { Feature } from '../types';
import { ControlsTable } from './controls-table';
import { Icon } from './icon';
import './feature-card.scss';

interface FeatureCardProps {
  feature: Feature
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {

  return (
    <div className="feature-card">
      <div className={`feature-card-header ${feature.state}`}>
        <Icon type={'circle'} color={'white'} />
        <h3 className="feature-title text-ellipsis">{feature.name}</h3>
        <Icon type={feature.state} color={'white'} />
      </div>
      <div className="controls-content">
        <ControlsTable controls={feature.controls} />
      </div>
      <div className="controls-footer d-flex">
        <Icon type={'ellipsis'} color={'#555555'} className={'f-grow-1'} />
      </div>
    </div>
  )
}