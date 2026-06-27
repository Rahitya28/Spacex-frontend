const FILTER_OPTIONS = [
  { value: "all", label: "All Missions" },
  { value: "Scheduled", label: "Scheduled" },
  { value: "Success", label: "Success" },
  { value: "Failed", label: "Failed" },
];

const Filter = ({ filterStatus, onFilterChange }) => {
  return (
    <div className="filter-control">
      <label htmlFor="status-filter" className="filter-label">
        Category
      </label>
      <select
        id="status-filter"
        className="filter-select"
        value={filterStatus}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {FILTER_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
