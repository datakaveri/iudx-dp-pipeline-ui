export type DPOutput = {
	suppression: string[];
	pseudonymization: string;
	spatioGeneralization: {
		locationCol: string;
		h3Resolution: number;
	};
	temporalGeneralization: {
		dateTimeCol: string;
		startTime: number;
		endTime: number;
	};
	aggregationPerUser: {
		trueValue: string;
		groupByCol: string;
	};
	aggregationAcrossUsers: {
		minEventOccurences: number;
		trueValueThreshold: number;
	};
	differentialPrivacy: {
		globalMaxValue: number;
		globalMinValue: number;
		epsilon: {
			query1: number;
			query2: number;
		};
	};
};
