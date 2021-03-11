/**
 * Renders a password entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {object} errors -  
 * @property {string} helpText - Instructions for password validation
 * @property {string} [className] - Add an additional style class
 * @property {boolean} [hideLabel] - Make a label visually hidden
 * @property {function} validateInline - Password validation before submit
 */

function Password(props) {
  const { id, className, errors, label, helpText, hideLabel, validateInline} = props;

  return (
    <div className="password">
      <label
        id={`${id}-lbl`}
        className={`label password__label ${hideLabel ? "visually-hidden" : "visible"} ${className ? className : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="input password__input"
        name={id}
        required
        aria-invalid={errors.length > 0 ? "true" : "false"}
        aria-required="true"
        type="password"
        aria-describedby={`${id}-help`}
        onBlur={validateInline}
      />

      <div className="help">
        <p id={`${id}-help`} className="help__content">
          {helpText}
        </p>
      </div>
    </div>
  );
}

export default Password;
