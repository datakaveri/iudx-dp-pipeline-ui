import { Button, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Field } from "react-final-form";

interface Props {
  handleSubmit: any;
  submitting: boolean;
  pristine: boolean;
  onClose: () => void;
}
export const DPNoiseAddition = ({
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
        <Grid item xs={5}>
          <label>globalMaxValue</label>
          <Field
            className="finalFormInput"
            name="globalMaxValue"
            component="input"
            type="number"
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <label>globalMinValue</label>
          <Field
            className="finalFormInput"
            name="globalMinValue"
            component="input"
            type="number"
          />
        </Grid>
      </Grid>
    </form>
  );
};
