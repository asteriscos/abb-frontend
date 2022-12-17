import React from 'react';
import { Control } from '../types';
import { Icon } from './icon';
import './controls-table.scss';

interface ControlsTableProps {
  controls: Control[]
}

interface ControlRowProps {
  control: Control
}

export const ControlsTable = ({ controls }: ControlsTableProps) => {


  return (
    <div className="feature-card">
      <div className="controls-table">
        <div className="control-name control-table-header"><b className="">Control</b></div>
        <div className="control-dev control-table-header"><b className="">Dev</b></div>
        <div className="control-devout control-table-header"><b className="">Dev Out Tol</b></div>
        <div className="control-status control-table-header"><b></b></div>
        {controls?.map((control, key) => (
          <ControlRow control={control} key={key} />
        ))}
      </div>
    </div>
  )
}

const ControlRow = ({ control }: ControlRowProps) => {
  const colors = {
    check: '#329a5d',
    error: '#f02f40',
    warning: '#e9c704',
  };
  return <>
    <div className="control-name"><span className="">{control.name}</span></div>
    <div className="control-dev"><span className="">{control.dev}</span></div>
    <div className="control-devout"><span className="">{control.devOut}</span></div>
    <div className="control-status"><Icon type={control.state} color={colors[control.state]} /></div>
  </>
}