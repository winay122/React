import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className=" bg-gray-600 text-center text-white text-3xl p-4">
        User: {userid}{" "}
      </h1>
    </>
  );
}

export default User;
