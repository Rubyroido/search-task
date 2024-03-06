import "./styles.css";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export function SearchForm(props) {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 500);

  useEffect(() => {
    if (value==='') {
      props.onSearch('')
    }
  }, [value])

  useEffect(() => {
    if (debounced !== '') {
      props.onSearch(debounced)
    }
  }, [debounced]);

  return (
    <div className="searchForm">
      <form>
        <input type="text" placeholder="Введите запрос" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
    </div>
  );
}
