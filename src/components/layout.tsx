import React from "react";
import { ReactComponent as ABBLogo } from "../assets/abb-logo.svg";
import './layout.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <header>
        <p className="text-ellipsis">
          <ABBLogo className="abb-logo"/><span className="font-35">Frontend assignment</span>
        </p>
      </header>
      <div className="list-layout">
        {children}
      </div>
    </div>
  )
}