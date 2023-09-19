import { DPOutput } from "../../types/DPOutput";

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
			return (
				<label>
					{data.spatioGeneralization !== null
						? `Updated spatioGeneralization & temporalGeneralization`
						: null}
				</label>
			);
		}
		case "Aggregation":
			return (
				<label>
					{data.aggregationPerUser !== null
						? `Updated aggregationPerUser and aggregationAcrossUsers`
						: null}
				</label>
			);

		case "Query Building":
			return <label></label>;

		case "DP - Noise Addition":
			return (
				<>
					<label>
						{data.differentialPrivacy !== null
							? `Updated differentialPrivacy`
							: null}
					</label>
				</>
			);
	}
	return <div>InputSwitchCase</div>;
};
