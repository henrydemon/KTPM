import { useCallback } from "react";
import style from "./style";

const SelectTrademark = ({ listDataOption, handleSelect }) => {
  const handleSetFilter = useCallback(
    (numberFilter) => {
      handleSelect(Number(numberFilter.target.value));
    },
    [handleSelect]
  );
  return (
    <>
      <div className="form-group col-sm-3" style={style.marginBottomForm}>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={(e) => {
            handleSetFilter(e);
          }}
        >
          <option value="0">Select By Trademark</option>
          {(listDataOption || []).map((item, index) => {
            return (
              <option key={index} value={item.mathuonghieu}>
                {item.tenthuonghieu}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectTrademark;
