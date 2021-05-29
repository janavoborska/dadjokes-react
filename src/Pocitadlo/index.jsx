import React, { useState } from 'react';

export const Pocitadlo = (props) => {
  const [pocet, setPocet] = useState(props.hlasy);

  return (
    <>
      <button
        className={`btn-like btn-like--${props.typ}`}
        onClick={() => setPocet(pocet + 1)}
      ></button>
      <span id="likes-up" className={`likes-count likes-count--${props.typ}`}>
        {pocet}
      </span>
    </>
  );
};
