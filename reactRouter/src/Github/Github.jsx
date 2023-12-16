import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/winay122")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="flex justify-center items-center  bg-gray-600">
      <div className=" text-center m-4 to-white p-4 text-3xl">
        Github followers: {data.followers}
        <img className="" src={data.avatar_url} width={300} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/winay122");
  return response.json();
};
