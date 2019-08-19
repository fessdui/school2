import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../store/redux/user/actions";
import UserRender from "./UserMenuRender";

function User(props) {
  return <UserRender {...props} />;
}

const mapStateToProps = state => {
  return {
    logged: state.user.logged,
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
