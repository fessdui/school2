import React from "react";
import ReactDOM from "react-dom";

function UserRender({ loginUser, loading, avatar, name, error, dispatch }) {
  const getAvatar = (loading, avatar, error) => {
    console.log(loading, avatar, error, "BLAT");
    let result = "";
    if (loading) {
      result = <p>Loading...</p>;
    } else if (error) {
      result = <p>Error, try again</p>;
    } else if (avatar) {
      result = (
        <p>
          <img src={avatar} alt="avatar" />
        </p>
      );
    }
    return result;
  };

  return (
    <div>
      <button onClick={() => dispatch(loginUser("user", "pass"))}>Login</button>
      {getAvatar(loading, avatar, error)}
      {name}
    </div>
  );
}

export default UserRender;
