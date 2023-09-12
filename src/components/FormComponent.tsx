/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, Form } from "react-final-form";
import { Button, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MouseEventHandler } from "react";
import { useStore, RFState } from "../store/store";
import "./styles.scss";

export interface FormValues {
	employed: boolean;
	favoriteColor: string;
	firstName: string;
	sauces: [string];
}

interface Props {
	id: string;
	onClose: () => void;
}

const FormComponent = ({ id, onClose }: Props) => {
	const updateNodeName = useStore((state: RFState) => state.updateNodeForm);

	const onSubmit = (values: FormValues) => {
		updateNodeName(id, values);
	};
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine }) => (
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={10}>
							<label>First Name</label>
							<Field
								name="firstName"
								component="input"
								type="text"
								placeholder="First Name"
							/>
						</Grid>
						<Grid item xs={2}>
							<IconButton onClick={onClose}>
								<CloseIcon />
							</IconButton>
						</Grid>

						<Grid item xs={6}>
							<label>Employed</label>
							<Field
								name="employed"
								component="input"
								type="checkbox"
							/>
						</Grid>
						<Grid item xs={6}>
							<label>Favorite Color</label>
							<Field name="favoriteColor" component="select">
								<option />
								<option value="red">Red</option>
								<option value="green">Green</option>
								<option value="blue">Blue</option>
							</Field>
						</Grid>
						<Grid item xs={12}>
							<label>Sauces</label>
							<div className="saucesList">
								<label>
									<Field
										name="sauces"
										component="input"
										type="checkbox"
										value="ketchup"
									/>{" "}
									Ketchup
								</label>
								<label>
									<Field
										name="sauces"
										component="input"
										type="checkbox"
										value="mustard"
									/>{" "}
									Mustard
								</label>
								<label>
									<Field
										name="sauces"
										component="input"
										type="checkbox"
										value="mayonnaise"
									/>{" "}
									Mayonnaise
								</label>
								<label>
									<Field
										name="sauces"
										component="input"
										type="checkbox"
										value="guacamole"
									/>{" "}
									Guacamole
								</label>
							</div>
						</Grid>
						<Grid item xs={1} />
						<Grid item xs={5}>
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
						<Grid item xs={5}>
							<Button
								type="button"
								onClick={
									form.reset as MouseEventHandler<HTMLButtonElement>
								}
								disabled={submitting || pristine}
								color="secondary"
								size="small"
							>
								Reset
							</Button>
						</Grid>
						<Grid item xs={1} />
					</Grid>
				</form>
			)}
		/>
	);
};

export default FormComponent;
