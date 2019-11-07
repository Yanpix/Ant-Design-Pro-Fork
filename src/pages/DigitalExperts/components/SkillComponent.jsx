import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const SkillComponent = props => (<Select className="custom-select" size="large" placeholder="Select skill" {...props}>
  <Option value="c">C/C++</Option>
  <Option value="java">Java</Option>
  <Option value="JavaScript">JavaScript</Option>
</Select>);

export default SkillComponent;
