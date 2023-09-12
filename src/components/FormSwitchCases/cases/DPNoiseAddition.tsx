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
				<Grid item xs={9} />
				<Grid item xs={3}>
					<IconButton onClick={onClose}>
						<CloseIcon />
					</IconButton>
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
				<Grid item xs={1} />
				<Grid item xs={5}>
					<label>globalMinValue</label>
					<Field
						className="finalFormInput"
						name="globalMinValue"
						component="input"
						type="number"
					/>
				</Grid>
				<Grid item xs={10}>
					<label>epsilon</label>
				</Grid>
				<Grid item xs={5}>
					<label>query1</label>
					<Field
						className="finalFormInput"
						name="query1"
						component="input"
						type="number"
					/>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={5}>
					<label>query2</label>
					<Field
						className="finalFormInput"
						name="query2"
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
