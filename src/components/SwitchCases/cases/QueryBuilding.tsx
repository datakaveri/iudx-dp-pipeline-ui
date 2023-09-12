import { Button, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleSubmit: any;
  submitting: boolean;
  pristine: boolean;
  onClose: () => void;
}

export const QueryBuilding = ({
  handleSubmit,
  submitting,
  pristine,
  onClose,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <label>pseudoCol</label>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid item xs={4} />
        <Grid item xs={4}>
          <Button
            type="submit"
            disabled={submitting || pristine}
            variant="contained"
            color="success"
            size="small"
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </form>
  );
};
