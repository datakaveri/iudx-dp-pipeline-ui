import { Button, Grid, IconButton } from "@mui/material";
import { Field } from "react-final-form";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";
import { dropdownOptions } from "../../../constants/dropdownOptions";
import { RFState } from "../../../types/RFState";
import { useStore } from "../../../store/store";

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
	const getFinalOutput = useStore((state: RFState) => state.getFinalOutput);

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<label>Suppression</label>
					<br />
					{dropdownOptions.map((el, index) => (
						<Fragment key={index}>
							<label>
								<Field
									name="suppression"
									component="input"
									type="checkbox"
									value={el}
								/>{" "}
								{el}
							</label>
							<br />
						</Fragment>
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
