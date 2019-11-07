import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
} from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import TableForm from '@/pages/DigitalExperts/components/TableForm';
import GenderRadioGroup from '@/pages/DigitalExperts/components/GenderRadioGroup';

const FormItem = Form.Item;
const { Option } = Select;

class DigitalExperts extends Component {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'digitalExperts/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator },
    } = this.props;


    const developerColLayout = {
      md: {
        span: 24,
      },
      lg: {
        span: 10,
      },
      xl: {
        span: 11,
      },
    };

    const languageColLayout = {
      sm: {
        span: 12,
      },
      md: {
        span: 8,
      },
      lg: {
        span: 5,
      },
      xl: {
        span: 5,
      },
    };

    const genderColLayout = {
      sm: {
        span: 12,
      },
      md: {
        span: 10,
      },
      lg: {
        span: 9,
      },
      xl: {
        span: 8,
      },
    };

    return (
      <PageHeaderWrapper>
        <Form
          onSubmit={this.handleSubmit}
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          layout="vertical"
        >
          <Row gutter={30}>
            <Col {...developerColLayout}>
              <FormItem label="Expert Name" className="custom-form-item">
                {getFieldDecorator('developer', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter an expert name',
                    },
                  ],
                })(<Input placeholder="E.g. Web Developer..." size="large"/>)}
              </FormItem>
            </Col>
            <Col {...languageColLayout}>
              <Form.Item label="Language" className="custom-form-item">
                {getFieldDecorator('lang', {
                  initialValue: 'english',
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(
                  <Select className="custom-select" size="large">
                    <Option value="english">US English</Option>
                    <Option value="chinese" disabled>Chinese</Option>
                    <Option value="portuguese" disabled>Portuguese</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
            <Col {...genderColLayout}>
              <FormItem
                label="Gender"
                className="custom-form-item"
              >
                <div>
                  {getFieldDecorator('gender', {
                    initialValue: 'female',
                  })(
                    <GenderRadioGroup />,
                  )}
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <TableForm />
          </Row>
          <Row className="submitRow">
            <FormItem
              style={{
                marginTop: 32,
              }}
            >
              <Button type="primary" htmlType="submit" loading={submitting} className="submitBtn" size="large">
                Create Digital Expert
              </Button>
              <Button
                style={{
                  marginLeft: 8,
                }}
                size="large"
              >
                Cancel
              </Button>
            </FormItem>
          </Row>
      </Form>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(
  connect(({ loading }) => ({
    submitting: loading.effects['digitalExperts/submitRegularForm'],
  }))(DigitalExperts),
);
