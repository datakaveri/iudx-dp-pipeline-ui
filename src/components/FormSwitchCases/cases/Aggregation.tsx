import { Button, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Field } from "react-final-form";

interface Props {
	handleSubmit: any;
	submitting: boolean;
	pristine: boolean;
	onClose: () => void;
}

const Aggregation = ({
	handleSubmit,
	submitting,
	pristine,
	onClose,
}: Props) => {
	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={9}>
					<label>aggregationPerUser</label>
				</Grid>
				<Grid item xs={3}>
					<IconButton onClick={onClose}>
						<CloseIcon />
					</IconButton>
				</Grid>
				<Grid item xs={5}>
					<label>trueValue</label>
					<Field
						className="finalFormInput"
						name="aggregationPerUser.trueValue"
						component="input"
						type="number"
					/>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={5}>
					<label>groupByCol</label>
					<Field
						className="finalFormInput"
						name="aggregationPerUser.groupByCol"
						component="input"
						type="number"
					/>
				</Grid>
				<Grid item xs={10}>
					<label>aggregationAcrossUsers</label>
				</Grid>
				<Grid item xs={5}>
					<label>minEventOccurences</label>
					<Field
						className="finalFormInput"
						name="aggregationAcrossUsers.minEventOccurences"
						component="input"
						type="number"
					/>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={5}>
					<label>trueValueThreshold</label>
					<Field
						className="finalFormInput"
						name="aggregationAcrossUsers.trueValueThreshold"
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

export default Aggregation;
