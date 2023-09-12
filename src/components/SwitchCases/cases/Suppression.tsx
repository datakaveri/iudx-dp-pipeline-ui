import { Button, Grid, IconButton } from "@mui/material";
import { Field } from "react-final-form";
import CloseIcon from "@mui/icons-material/Close";

const suppressionOptions: string[] = [
  "trip_direction",
  "last_stop_arrival_time",
  "route_id",
  "actual_trip_start_time",
  "trip_delay",
  "vehicle_label",
  "id",
  "location.type",
  "trip_id",
];

interface Props {
  handleSubmit: any;
  submitting: boolean;
  pristine: boolean;
  onClose: () => void;
}

export const Suppression = ({
  handleSubmit,
  submitting,
  pristine,
  onClose,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <label>Suppression</label>
          <br />
          {suppressionOptions.map((el, index) => (
            <>
              <label>
                <Field
                  key={index}
                  name="suppression"
                  component="input"
                  type="checkbox"
                  value={el}
                />{" "}
                {el}
              </label>
              <br />
            </>
          ))}
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
