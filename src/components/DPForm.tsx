import { Form } from "react-final-form";

import { RFState } from "../types/RFState";
import { useStore } from "../store/store";
import { SwitchCase } from "./FormSwitchCases/FormSwitchCase";
import { DPOutput } from "../types/DPOutput";

interface Props {
	id: string;
	onClose: () => void;
}

const DPForm = ({ id, onClose }: Props) => {
	const getNodeType = useStore((state: RFState) => state.getNodeType);
	const updateDPForm = useStore((state: RFState) => state.updateDPForm);

	const onSubmit = (values: DPOutput) => {
		updateDPForm(id, values);
	};

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine }) => (
				<SwitchCase
					handleSubmit={handleSubmit}
					onClose={onClose}
					pristine={pristine}
					submitting={submitting}
					type={getNodeType(id)}
				/>
			)}
		/>
	);
};

export default DPForm;
