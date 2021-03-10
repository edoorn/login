/**
 * Renders a password entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {string} [className] - Add an additional style class
 * @property {boolean} [hideLabel] - Make a label visually hidden
 */

function Password(props) {
  const { id, className, label, hideLabel } = props;

  return (
    <div className="password">
      <label
        id={`${id}-lbl`}
        className={`password__label ${hideLabel ? "visually-hidden" : "visible"} ${className ? className : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="password__input"
        name={id}
        required
        aria-required="true"
        type="password"
      />
    </div>
  );
}

export default Password;
