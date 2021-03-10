/**
 * Wrapper component for all Views
 * 
 * @property {string} view - Machine name for the View component to render
 * @property {string} title - Text of the page's h1
 */

import Login from "./Login";

function View(props) {
  const { view, title } = props;

  /**
   * Render the different views as children
   */
  const renderView = (view) => {
    switch(view) {
      case "login":
        return <Login />
      default:
        return null;
    }
  }

  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="page"
      aria-labelledby="page-title"
    >
      <h1 id="page-title" className="page__title">
        {title}
      </h1>
      {renderView(view)}
    </main>
  );
}

export default View;