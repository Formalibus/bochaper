import React, { useState } from "react";
import amogus from "../media/amogus.mp3";

function Music() {
  const [muz, setMuz] = useState(false);
  return (
    <div className="Music">
      <p>Ножми на меня</p>
      <img
        className="Music__amogus"
        onClick={() => setMuz(!muz)}
        src="https://www.amogus.org/amogus.png"
        alt="amogus"
      />
      {muz ? (
        <audio autoplay="autoplay">
          <source src={amogus} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : null}
    </div>
  );
}

export default Music;
