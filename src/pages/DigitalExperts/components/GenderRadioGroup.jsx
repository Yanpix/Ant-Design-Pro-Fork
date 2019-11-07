import { Radio } from 'antd';
import { FemaleIcon, MaleIcon } from '@/components/CustomIcons';
import React, { Component } from 'react';

class GenderRadioGroup extends Component {
  constructor(props) {
    super(props);
    const { value: selectedGender } = props;
    this.state = {
      selectedGender,
    }
  }

  handleGenderChange = e => {
    const { value: selectedGender } = e.target;
    this.setState({
      selectedGender,
    })
  };

  render() {
    const { selectedGender } = this.state;
    return (
      <Radio.Group buttonStyle="solid" onChange={this.handleGenderChange} size="large" defaultValue={ selectedGender }>
        <Radio.Button value="female" className="genderButton" >
          <FemaleIcon className={ selectedGender === 'female' ? 'genderIconsSelected' : 'genderIcons'}/>
          Female
        </Radio.Button>
        <Radio.Button value="male" className="genderButton">
          <MaleIcon className={ selectedGender === 'male' ? 'genderIconsSelected' : 'genderIcons'}/>
          Male
        </Radio.Button>
      </Radio.Group>
    );
  }
}

export default GenderRadioGroup;
