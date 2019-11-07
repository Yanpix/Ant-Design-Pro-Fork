import React, { Component } from 'react';
import { Slider } from 'antd';

class DurationComponent extends Component {
  constructor(props) {
    super(props);
    const { defaultValue, max, maxAllowed } = props;

    this.state = {
      defaultValue,
      max,
      currentValue: 0,
      maxAllowed,
    };
  }

  componentWillUnmount() {
    const { handleDurationChange, id } = this.props;
    handleDurationChange({ id, duration: 0 });
  }

  handleDurationChange = e => {
    const { maxAllowed } = this.state;
    const { handleDurationChange, id } = this.props;
    this.setState({
      currentValue: e <= maxAllowed ? e : maxAllowed,
    }, () => handleDurationChange({ id, duration: this.state.currentValue }));
  };

  render() {
    const { defaultValue, currentValue, max, maxAllowed } = this.state;
    const isMaxDuration = currentValue === maxAllowed ? <span className="duration-max">Max allowed duration reached</span> : null;
    const maxAllowedPercent = (maxAllowed / max) * 100;

    return (<div className="duration-container">
      <Slider
        defaultValue={defaultValue}
        max={max}
        onChange={this.handleDurationChange}
        value={currentValue}
        {...this.props}
        className="duration-slider"
      >
        <div className="ant-slider-rail"
             style={{
               background: `linear-gradient(90deg, #d9dfe3 ${maxAllowedPercent}%, #fff ${maxAllowedPercent}%, #fff 100%, #d9dfe3 100%)`,
               zIndex: 0,
             }} />
      </Slider>
      <span className="duration-info">{(`00${currentValue}`).substr(-2, 2)} min</span>
      {isMaxDuration}
    </div>)
  }
}

export default DurationComponent;
