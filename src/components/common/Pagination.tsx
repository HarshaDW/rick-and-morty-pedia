import { Button, ButtonGroup } from "@mui/material";

type Props = {
  page: number;
  setPage: (number) => void;
};

const Pagination = (props: Props) => {
  const { page, setPage } = props;
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        onClick={e => {
          setPage(page - 1);
        }}
      >
        Previous
      </Button>
      <Button disabled>{page}</Button>
      <Button
        onClick={e => {
          setPage(page + 1);
        }}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
