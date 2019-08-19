import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../store/redux/user/actions";
import UserRender from "./components/UserRender";

function User(props) {
  return <UserRender {...props} />;
}

const mapStateToProps = state => {
  console.info(state, "STATE IN MAP FUNCTION");
  return {
    name: state.user.name,
    avatar: state.user.avatar,
    loading: state.user.loading,
    error: state.user.error
  };
};

const mapDispachToProps = { loginUser };

export default connect(
  mapStateToProps,
  mapDispachToProps
)(User);
