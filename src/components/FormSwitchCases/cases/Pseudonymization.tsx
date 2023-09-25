import { Button, Grid, IconButton } from "@mui/material";
import { Field } from "react-final-form";
import CloseIcon from "@mui/icons-material/Close";
import { dropdownOptions } from "../../../constants/dropdownOptions";
import { useStore } from "../../../store/store";
import { RFState } from "../../../types/RFState";

interface Props {
	handleSubmit: any;
	submitting: boolean;
	pristine: boolean;
	onClose: () => void;
}

export const Pseudonymization = ({
	handleSubmit,
	submitting,
	pristine,
	onClose,
}: Props) => {
	const getFinalOutput = useStore((state: RFState) => state.getFinalOutput);
	console.log(getFinalOutput());

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<label>pseudoCol</label>
					<Field name="pseudonymization" component="select">
						<option />
						{dropdownOptions
							.filter(
								(el) =>
									!getFinalOutput().suppression.includes(el)
							)
							.map((el, index) => (
								<option value={el} key={index}>
									{el}
								</option>
							))}
					</Field>
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
