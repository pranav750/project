import { Fragment } from "react";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import Dashboard from "../Dashboard/Dashboard";
import Data from "../Data/Data";

const Home = () => {
  const userID = useSelector((state) => state.user.userID);

  return (
    <div>
      {userID === null ? (
        <Fragment>
          <Form />
          <Data />
        </Fragment>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Home;
