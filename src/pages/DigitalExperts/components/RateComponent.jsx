import React, { Component, Fragment } from 'react';
import { Rate } from 'antd';
import { StarIcon } from '@/components/CustomIcons';

class RateComponent extends Component {
  levels = ['Easy', 'Medium', 'Hard'];

  constructor(props) {
    super(props);
    const { count } = this.props;
    this.state = {
      count,
      info: '',
    }
  }

  handleLevelChange = e => {
    this.setState({
      info: this.levels[e - 1],
    });
  };

  render() {
    const { count, info } = this.state;
    return (<Fragment>
      <Rate
        count={count}
        onChange={this.handleLevelChange}
        className="difficulty-rate"
        {...this.props}
        character={<StarIcon />}
      />
      <span className="difficulty-info">{info}</span>
    </Fragment>);
  }
}

export default RateComponent;
