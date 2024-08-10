export function BootstrapDropdown({
  dropdownValues,
  clickDropDownAction,
  values,
}) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
      >
        {dropdownValues}
      </button>
      <ul className="dropdown-menu">
        {values.map((value, i) => (
          <li onClick={() => clickDropDownAction(value)}>
            <a className="dropdown-item">{value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
