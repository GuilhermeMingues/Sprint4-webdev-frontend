function OptionGroup({ label, options, selected, onSelect }) {
  return (
    <div>
      <h4 className="mb-3 text-[13px] font-bold tracking-[2px] text-jovi-faint">
        {label}
      </h4>

      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`cursor-pointer rounded-full border px-[18px] py-2.5 text-[13px] transition duration-300 ${
              selected === option.id
                ? "border-jovi-accent bg-jovi-accent text-white"
                : "border-jovi-border bg-transparent text-jovi-muted hover:border-jovi-accent hover:text-white"
            }`}
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
