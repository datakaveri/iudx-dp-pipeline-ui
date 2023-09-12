import { Button, Grid, IconButton } from "@mui/material";
import { Field } from "react-final-form";
import CloseIcon from "@mui/icons-material/Close";
import { Suppression } from "./cases/Suppression";
import { Pseudonymization } from "./cases/Pseudonymization";
import { Generalization } from "./cases/Generalization";
import Aggregation from "./cases/Aggregation";
import { DPNoiseAddition } from "./cases/DPNoiseAddition";
import { QueryBuilding } from "./cases/QueryBuilding";

interface Props {
  type: string;
  handleSubmit: any;
  submitting: boolean;
  pristine: boolean;
  onClose: () => void;
}

export const SwitchCase = ({
  type,
  handleSubmit,
  submitting,
  pristine,
  onClose,
}: Props) => {
  switch (type) {
    case "Suppression":
      return (
        <Suppression
          handleSubmit={handleSubmit}
          onClose={onClose}
          pristine={pristine}
          submitting={submitting}
        />
      );
    case "Pseudonymization":
      return (
        <Pseudonymization
          handleSubmit={handleSubmit}
          onClose={onClose}
          pristine={pristine}
          submitting={submitting}
        />
      );
    case "Generalization":
      return (
        <Generalization
          handleSubmit={handleSubmit}
          onClose={onClose}
          pristine={pristine}
          submitting={submitting}
        />
      );
    case "Aggregation":
      return (
        <Aggregation
          handleSubmit={handleSubmit}
          onClose={onClose}
          pristine={pristine}
          submitting={submitting}
        />
      );
    case "Query Building":
      return (
        <QueryBuilding
          handleSubmit={handleSubmit}
          submitting={submitting}
          pristine={pristine}
          onClose={onClose}
        />
      );
    case "DP - Noise Addition":
      return (
        <DPNoiseAddition
          handleSubmit={handleSubmit}
          submitting={submitting}
          pristine={pristine}
          onClose={onClose}
        />
      );
  }
};
