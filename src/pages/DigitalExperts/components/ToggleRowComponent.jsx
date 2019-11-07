import { Button } from 'antd';
import React from 'react';

const ToggleRowComponent = ({ toggle, newRow, idx, removeRow }) => (
  <span>
        {toggle === 'remove' ? (
          <Button icon="close" className="removeBtn" onClick={() => removeRow(idx)} />
        ) : (
          <Button icon="plus" onClick={newRow} />
        )}
      </span>
);

export default ToggleRowComponent;
