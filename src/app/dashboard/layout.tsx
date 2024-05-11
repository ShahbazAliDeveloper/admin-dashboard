import React from 'react';
import SideBarComponent from '../_ui/dashboard/sidebar/sidebar';
import NavbarComponent from '../_ui/dashboard/navbar/navbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <SideBarComponent />
      </div>
      <div>
        <NavbarComponent />
        {children}
      </div>
    </div>
  );
}
