import React from "react";
import App from "./App";
import { connect } from "react-redux";
import { fetchDog } from "../store/dogs/actions";

function AppContainer({ dispatch, fetchDog, url, loading, error }) {
  return (
    <App
      fetchDog={fetchDog}
      dispatch={dispatch}
      url={url}
      loading={loading}
      error={error}
    />
  );
}

const mapStateToProps = state => {
  return {
    url: state.dogs.url,
    loading: state.dogs.loading,
    error: state.dogs.error
  };
};

const mapDispachToProps = { fetchDog };

export default connect(
  mapStateToProps,
  mapDispachToProps
)(AppContainer);
