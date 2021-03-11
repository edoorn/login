/**
 * Renders Aria-live Regions
 * 
 * @TODO - Implement this component using "The React Way",
 * with methods, props and state.
 */

 function Announce() {

  return (
    <div>
      <div
        className="app-live-assertive"
        role="log"
        className="visually-hidden"
        aria-live="assertive"
        aria-relevant="additions"
        aria-atomic="true"
      >
      </div>

      <div
        id="app-live-polite"
        role="log"
        className="visually-hidden"
        aria-live="polite"
        aria-relevant="additions"
        aria-atomic="true"
      >
      </div>
    </div>
  )
}

export default Announce;
