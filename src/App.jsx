import "./App.css";
import ErrorScreen from "./common/ErrorScreen";
import useFetch from "./hooks/useFetch";
import { httpMethods, getProjectInfoUrl } from "./constants/networkConstants";
import Loader from "./common/Loader";
import Table from "./components/Table";
import { useEffect } from "react";

function App() {
  const { data, isLoading, error } = useFetch({
    url: getProjectInfoUrl,
    method: httpMethods.GET,
  });

  useEffect(() => {
    console.log(data, isLoading, error);
  }, [data, isLoading, error]);

  if (isLoading || data == null) {
    return <Loader />;
  }
  if (error) return <ErrorScreen message={error} />;
  return (
    <Table
      caption="Table Data"
      columns={[
        { key: "s.no", header: "S. No" },
        { key: "amt.pledged", header: "Amount Pledged" },
        { key: "percentage.funded", header: "Percentage Funded" },
      ]}
      itemsPerPage={5}
      data={data}
    />
  );
}

export default App;
