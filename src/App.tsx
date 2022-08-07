import Header from "./components/common/Header";
import Layout from "./components/common/Layout";
import AvatarGrid from "./components/AvatarGrid";
import { useState } from "react";
import { useCharactersQuery } from "../src/app/api/characters";
import Pagination from "./components/common/Pagination";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useCharactersQuery(page);

  return (
    <div>
      <Header />
      <Layout>
        <Pagination page={page} setPage={setPage} />
        {isLoading ? <CircularProgress /> : <AvatarGrid characters={data} />}
      </Layout>
    </div>
  );
};

export default App;
