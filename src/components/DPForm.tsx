import { Form } from "react-final-form";

import { DPOutput, RFState, useStore } from "../store/store";
import { SwitchCase } from "./SwitchCases/SwitchCase";

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
