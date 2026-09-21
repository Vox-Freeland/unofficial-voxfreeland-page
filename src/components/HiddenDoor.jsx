import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HiddenDoor() {
  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  function handleClick() {
    const next = clicks + 1;
    setClicks(next);
    if (next === 3) {
      navigate('/the-ledger'); // secret route
    }
  }

  return (
    <div className="hidden-sigil" onClick={handleClick} title="???">
      🕯️
    </div>
  );
  
}
export default HiddenDoor;
