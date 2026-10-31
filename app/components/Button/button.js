const base =
  "inline-block cursor-pointer rounded-full px-6 py-3.5 text-sm font-bold transition duration-300 disabled:opacity-60";

const variants = {
  primary: "bg-jovi-accent text-white hover:bg-jovi-accent-hover",
  secondary: "border border-jovi-border text-white hover:bg-jovi-bg-alt",
};

function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
