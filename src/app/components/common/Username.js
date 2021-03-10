/**
 * Renders a username entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {string} [className] - Add an additional style class
 * @property {boolean} [hideLabel] - Make a label visually hidden
 */

 function Username(props) {
  const { id, className, label, hideLabel } = props;

  return (
    <div className="username">
      <label
        id={`${id}-lbl`}
        className={`username__label ${hideLabel ? "visually-hidden" : "visible"} ${className ? className : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="username__input"
        name={id}
        required
        aria-required="true"
        type="text"
      />
    </div>
  );
}

export default Username;
