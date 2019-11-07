import { Button, Table } from 'antd';
import React, { Component } from 'react';
import SkillComponent from './SkillComponent';
import RateComponent from './RateComponent';
import DurationComponent from './DurationComponent';
import TableFooter from './TableFooter';

const ToggleRowComponent = ({ toggle, removeRow, newRow = () => {}, idx }) => (
    <span>
      { toggle === 'remove' ?
        <Button icon="close" className="removeBtn" onClick={removeRow(idx)}/> :
        <Button icon="plus" onClick={newRow}/>
      }
    </span>);

class TableForm extends Component {
  index = 1;

  columns = [
    {
      title: 'Skills to be interviewed',
      dataIndex: 'skills',
      key: 'skills',
      width: '40%',
    },
    {
      title: 'Difficulty Level',
      dataIndex: 'difficulty',
      key: 'difficulty',
      width: '15%',
    },
    {
      title: 'Duration of questions for the skill',
      dataIndex: 'duration',
      key: 'duration',
      width: '40%',
    },
    {
      title: '',
      key: 'toggle',
      dataIndex: 'toggle',
      width: '5%',
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    const initialData = [
      {
        key: 0,
        skills: <SkillComponent />,
        difficulty: <RateComponent count={3} />,
        duration: <DurationComponent defaultValue={1} min={1} max={60} maxAllowed={30} />,
        toggle: <ToggleRowComponent toggle="add" idx={0} removeRow={this.removeRow} newRow={this.newRow}/>,
        editable: true,
      },
    ];
    this.setState({
      data: initialData,
    });
  }

  newRow = () => {
    const { data = [] } = this.state;
    const newData = data.map((item, i ) => ({ ...item, toggle: <ToggleRowComponent toggle="remove" removeRow={ () => this.removeRow} idx={i}/> }));
    newData.push({
      key: this.index,
      skills: <SkillComponent />,
      difficulty: <RateComponent count={3} />,
      duration: <DurationComponent defaultValue={1} min={1} max={60} maxAllowed={30}/>,
      toggle: <ToggleRowComponent toggle="add" idx={this.index} removeRow={this.removeRow} newRow={this.newRow}/>,
      editable: true,
      isNew: true,
    });
    this.index += 1;
    this.setState({
      data: newData,
    });
  };

  removeRow = (idx) => {
    const { data = [] } = this.state;
    const newData = data.filter(item => item.key !== idx);
    this.setState({
      data: newData,
    });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <Table
        loading={loading}
        columns={this.columns}
        dataSource={data}
        pagination={false}
        footer={() => <TableFooter />}
        className="tableForm"
      />
    );
  }
}

export default TableForm;
