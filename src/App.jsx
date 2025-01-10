import "./App.css";
import ErrorScreen from "./common/ErrorScreen";
import useFetch from "./hooks/useFetch";
import {
  httpMethods,
  getProjectInfoUrl,
  tableConfig,
} from "./constants/networkConstants";
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
      caption="Funding Data (This table is responsive try the mobile view too!)"
      columns={tableConfig}
      itemsPerPage={5}
      data={data}
    />
  );
}

export default App;
