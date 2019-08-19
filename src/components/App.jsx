import React from "react";
import ReactDOM from "react-dom";

function App({ fetchDog, dispatch, loading, url, error }) {
  const getImage = (loading, url, error) => {
    let result = "";
    if (loading) {
      result = <p>Loading...</p>;
    } else if (error) {
      result = <p>Error, try again</p>;
    } else if (url) {
      result = (
        <p>
          <img src={url} alt="test" />
        </p>
      );
    }
    return result;
  };

  return (
    <div>
      <button onClick={() => dispatch(fetchDog())}>Show Dog</button>
      {getImage(loading, url, error)}
    </div>
  );
}

export default App;
