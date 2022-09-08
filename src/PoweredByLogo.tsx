import bynderLogo from './bynder_logo.png'
import { FC } from "react";

export const PoweredByLogo: FC = () => (
  <div style={{ float: 'right', padding: 10 }}>
    <span style={{ paddingRight: 5 }}>powered by</span>
    <img
      height={40}
      src={bynderLogo}
      alt="Bynder logo"
      title="Bynder logo"
    />
  </div>
);

PoweredByLogo.displayName = 'PoweredByLogo';
