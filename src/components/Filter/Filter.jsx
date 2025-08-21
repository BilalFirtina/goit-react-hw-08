import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter) ?? "";

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search..."
      />
    </label>
  );
};

export default Filter;
