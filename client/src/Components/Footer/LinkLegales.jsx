import React from 'react';

const LegalesLink = ({ text, url }) => {
  const redirigirALegales = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="hover:text-chiliRed legales-button cursor-pointer" onClick={redirigirALegales}>
      {text}
    </div>
  );
};

export default LegalesLink;
