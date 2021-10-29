// @flow
import React from "react";
import "antd/dist/antd.css";
import "../scss/TimeForm.scss";
import TimeRanges from "./TimeRanges";
import TimeZone from "./TimeZone";
import { Form, DatePicker } from "antd";
import moment from "moment";
import { PARSE_FORMAT } from "../constants/timeFormat";

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const TimeForm = () => {
  const handleChange = (e: any) => {
    if (startDate) {
      console.log(startDate);
    }
    setStartDate(e[0]);
    setEndData(e[1]);
  };

  const [startDate, setStartDate] = React.useState(moment().subtract(7, "d"));
  const [endDate, setEndData] = React.useState(moment());

  return (
    <Form className="calendar-form" {...formItemLayout}>
      <Form.Item className="time-ranges">
        <TimeRanges time={startDate} />
      </Form.Item>
      <Form.Item className="calendar-form-item">
        <RangePicker
          className="range-picker-custom"
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          onChange={handleChange}
          value={[startDate, endDate]}
        />
      </Form.Item>
      <Form.Item>
        <TimeZone />
      </Form.Item>
    </Form>
  );
};

export default TimeForm;
