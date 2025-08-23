import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
