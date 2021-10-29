// @flow
import "antd/dist/antd.css";
import { Select } from "antd";
import { validMomentTimezones } from "../constants/timeZones";

const { Option } = Select;

const TimeZone = () => {
  const handleSelect = (e: any) => {
    console.log(e);
  };

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
      onSelect={handleSelect}
    >
      {validMomentTimezones.map((timezone) => {
        return <Option value={timezone}>{timezone}</Option>;
      })}
    </Select>
  );
};

export default TimeZone;
