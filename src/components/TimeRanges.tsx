// @flow
import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { FieldTimeOutlined } from "@ant-design/icons";
import moment from "moment";
import { PARSE_FORMAT } from "../constants/timeFormat";

const { SubMenu } = Menu;

const TimeRanges = (props: any) => {
  const [updatedDate, setUpdatedDate] = React.useState(props.updateTime);

  const handleClick = (e: any) => {
    console.log(`CURRENT TIME: ${updatedDate}`);
    let selectedVal = findMoment(e.key);
    if (selectedVal?.time) {
      console.log(`NEW TIME: ${selectedVal.time}`);
      setUpdatedDate(selectedVal.time);
    }
  };

  const timeRanges = [
    {
      key: "last-5-m",
      title: "Last 5 minutes",
      time: moment(updatedDate).subtract(5, "m").format(PARSE_FORMAT),
    },
    {
      key: "last-15-m",
      title: "Last 15 minutes",
      time: moment(updatedDate).subtract(15, "m").format(PARSE_FORMAT),
    },
    {
      key: "last-30-m",
      title: "Last 30 minutes",
      time: moment(updatedDate).subtract(30, "m").format(PARSE_FORMAT),
    },
    {
      key: "last-1-h",
      title: "Last 1 hour",
      time: moment(updatedDate).subtract(1, "h").format(PARSE_FORMAT),
    },
    {
      key: "last-3-h",
      title: "Last 3 hour",
      time: moment(updatedDate).subtract(3, "h").format(PARSE_FORMAT),
    },
    {
      key: "last-6-h",
      title: "Last 6 hour",
      time: moment(updatedDate).subtract(6, "h").format(PARSE_FORMAT),
    },
    {
      key: "last-12-h",
      title: "Last 12 hour",
      time: moment(updatedDate).subtract(12, "h").format(PARSE_FORMAT),
    },
    {
      key: "last-1-d",
      title: "Last 1 day",
      time: moment(updatedDate).subtract(1, "d").format(PARSE_FORMAT),
    },
    {
      key: "last-2-d",
      title: "Last 2 day",
      time: moment(updatedDate).subtract(2, "d").format(PARSE_FORMAT),
    },
    {
      key: "last-7-d",
      title: "Last 7 day",
      time: moment(updatedDate).subtract(7, "d").format(PARSE_FORMAT),
    },
  ];

  const findMoment = (key: string) => timeRanges.find((o) => o.key === key);

  return (
    <Menu mode="vertical">
      {timeRanges.map((time) => {
        return (
          <SubMenu
            key={time.key}
            icon={<FieldTimeOutlined />}
            title={time.title}
            onTitleClick={handleClick}
            className="time-ranges"
          ></SubMenu>
        );
      })}
    </Menu>
  );
};

export default TimeRanges;
