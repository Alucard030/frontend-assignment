import "./Loader.css";


const Loader = () => {
  return (
    <div className="loader-container">
        <div
        className="loader"
        role="progressbar"
        aria-valuetext="Loading"
        aria-label="Loading content"
      ></div>
    </div>
  );
};

export default Loader;
