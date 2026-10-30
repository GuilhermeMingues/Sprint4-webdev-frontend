function FormField({ id, label, error, multiline = false, ...props }) {
  const Campo = multiline ? "textarea" : "input";

  return (
    <div className="form-row">
      <label htmlFor={id}>{label}</label>

      <Campo
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        className={error ? "border-red-400!" : ""}
        {...props}
      />

      {error && <small className="text-xs text-red-400">{error}</small>}
    </div>
  );
}

export default FormField;
