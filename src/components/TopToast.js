import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [showModal, setShowMOdal] = useState(true);
  return (
    <div>
        <div className="p-10 text-center">
          {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5" onClick={() =>
          setShowMOdal(true)}>
            Contact us
          </button> */}
        </div>
        <Modal isVisible={showModal} onClose={() => setShowMOdal(false)} />
    </div>
  );
}

export default App;
