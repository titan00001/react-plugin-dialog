import * as React from 'react';
import Dialog from '../lib/Dialog';
import { useState } from 'react';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <h1>Dialog Component Playground</h1>

        <div>
          <button onClick={() => setShowModal(show => !show)}>Open dialog</button>
          <Dialog isOpen={showModal}>
            <div className='dialog-wrapper'>
              <p>Hello from dialog</p> 
              <div className='dialog-action'>
                <button className='primary' onClick={() => setShowModal(show => !show)}>Proceed</button>
                <button className='danger' onClick={() => setShowModal(show => !show)}>Cancel</button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default App
