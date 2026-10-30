function OptionGroup({ label, options, selected, onSelect }) {
  return (
    <div className="option-group">
      <h4>{label}</h4>

      <div className="option-buttons">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`option-button ${selected === option.id ? "active" : ""}`}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default OptionGroup;
