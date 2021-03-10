/**
 * Renders a username entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {string} [className] - Add an additional style class
 * @property {string} [helpText] - Instructions and additional context
 * @property {boolean} [hideLabel] - Make a label visually hidden
 */

 function Username(props) {
  const { id, className, label, helpText, hideLabel } = props;

  return (
    <div className="username">
      <label
        id={`${id}-lbl`}
        className={`label username__label ${hideLabel ? "visually-hidden" : "visible"} ${className ? className : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="input username__input"
        name={id}
        required
        aria-required="true"
        type="text"
        {...(helpText && {
          "aria-describedby": `${id}-help`
        })}
      />

      {helpText &&
        <div className="note">
          <p id={`${id}-help`} className="note__content">{helpText}</p>
        </div>
      }
    </div>
  );
}

export default Username;
