import { Button, Grid, IconButton } from "@mui/material";
import { Field } from "react-final-form";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleSubmit: any;
  submitting: boolean;
  pristine: boolean;
  onClose: () => void;
}

export const Generalization = ({
  handleSubmit,
  submitting,
  pristine,
  onClose,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <label>spatio-generalization</label>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <label>locationCol</label>
          <Field name="locationCol" component="input" type="text" />{" "}
        </Grid>
        <Grid item xs={10}>
          <label>h3Resolution</label>
          <Field name="h3Resolution" component="input" type="number" />
        </Grid>
        <Grid item xs={10}>
          <label>temporal-generalization</label>
        </Grid>
        <Grid item xs={10}>
          <label>dateTimeCol</label>
          <Field name="dateTimeCol" component="input" type="text" />
        </Grid>

        <Grid item xs={5}>
          <label>startTime</label>
          <Field
            className="finalFormInput"
            name="startTime"
            component="input"
            type="number"
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <label>endTime</label>
          <Field
            className="finalFormInput"
            name="endTime"
            component="input"
            type="number"
          />
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
