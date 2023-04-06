import { useCallback } from "react";
import style from "./style";

const SelectCategory = ({ listDataOption, handleSelect }) => {
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
          <option value="0">Select By Category</option>
          {(listDataOption || []).map((item, index) => {
            return (
              <option key={index} value={item.madanhmuc}>
                {item.tendanhmuc}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectCategory;
