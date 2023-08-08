"use client";
import useSWR from "swr";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Dashboard = () => {
  // const [data, setData] = useState<Post[]>([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //       return notFound();
  //     }

  //     const dataArr: Post[] = await res.json();

  //     setLoading(false);
  //     setData(dataArr);
  //   };
  //   getData();
  // }, []);

  type fetchArg = RequestInfo | URL;

  const fetcher = (url: fetchArg) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div className="">Dashboard</div>;
};
export default Dashboard;
