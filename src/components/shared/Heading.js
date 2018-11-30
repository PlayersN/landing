import React from 'react';
import '../../stylesheets/components/shared/Heading.css';

export default function Heading({
  children = [],
}) {
  return (
    <h1 className="heading">{children}</h1>
  )
}