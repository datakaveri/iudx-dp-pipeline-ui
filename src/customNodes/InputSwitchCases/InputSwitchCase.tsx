import { DPOutput } from "../../store/store";

interface Props {
	nodeType: string;
	data: DPOutput;
}

export const InputSwitchCase = ({ nodeType, data }: Props) => {
	switch (nodeType) {
		case "Suppression":
			return <label>{data.suppression.length} items selected</label>;
		case "Pseudonymization":
			return <label>{data.pseudonymization}</label>;

		case "Generalization": {
			return <label>{data.spatioGeneralization.locationCol} 1</label>;
		}
		case "Aggregation":
			return <label>{data.aggregationPerUser.trueValue}</label>;

		case "Query Building":
			return (
				<label>{data.aggregationAcrossUsers.trueValueThreshold}</label>
			);

		case "DP - Noise Addition":
			return (
				<>
					<label>{data.differentialPrivacy.globalMaxValue}</label>
				</>
			);
	}
	return <div>InputSwitchCase</div>;
};
