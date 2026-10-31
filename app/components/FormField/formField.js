function FormField({ id, label, error, multiline = false, ...props }) {
  const Campo = multiline ? "textarea" : "input";

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[13px] tracking-[1px] text-jovi-faint">
        {label}
      </label>

      <Campo
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        className={`rounded-lg border bg-jovi-bg-alt px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-jovi-faint focus:border-jovi-accent ${
          error ? "border-red-400" : "border-jovi-border"
        } ${multiline ? "resize-y" : ""}`}
        {...props}
      />

      {error && <small className="text-xs text-red-400">{error}</small>}
    </div>
  );
}

export default FormField;
