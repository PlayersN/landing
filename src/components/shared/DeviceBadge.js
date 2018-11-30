import React from 'react';
import '../../stylesheets/components/shared/DeviceBadge.css';

export default function DeviceBadge({
  children = [],
}) {
  return(
  <span className="device-badge">
    {children}
  </span>
  );
}