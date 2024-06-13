import React from 'react';
import Textarea from 'react-textarea-autosize';
import './MainContentArea.css';

function MainContentArea() {
  return (
    <div>
      <Textarea
        className="dream-textarea"
        placeholder="Write down your dreams..."
        minRows={10}
        maxRows={20}
        style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
      />
    </div>
  );
}

export default MainContentArea;

