import { Handle, NodeProps, Position } from "reactflow";
import { useStore } from "../store/store";
import { Button } from "@mui/material";
import { useState } from "react";
import { DPOutput } from "../types/DPOutput";
import { RFState } from "../types/RFState";
import { NodeData } from "../types/NodeData";
import "./styles.scss";
import axios from "axios";

// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css"; //Example style, you can use another

const JSONNode = ({ isConnectable }: NodeProps<NodeData>) => {
	const [jsonData, setJsonData] = useState<DPOutput>();
	const getFinalOutput = useStore((state: RFState) => state.getFinalOutput);

	const onGetData = () => {
		setJsonData(getFinalOutput());
	};

	const onSubmit = () => {
		// TODO: Integrate API here

		// ? *jsonData* is where your form inputs reside
		// * logging the form input
		console.log(jsonData);

		// ? Initialize FormData for API
		const form = new FormData();

		// ! Here, I am providing a dummy config file. The path here must be replaced with the *form* variable
		// ! initialized above
		form.append("file", "/home/amarthya/IUDX/DP/anonymizationConfig.json");

		// ? Config for axios
		// * You can use fetch or any other libraries for API calls
		const options = {
			method: "POST", // ? the type of request
			url: "https://authenclave.iudx.io/diffpriv_resource_server/config/suratITMS_data_csv.csv", // ? Request URL
			headers: {
				// ? Headers
				Authorization:
					"Basic cHJvdmlkZXI6RXBpcGhhbnlEaW1seURvb3J3YXlFY29ub21pYw==",
				"content-type":
					"multipart/form-data; boundary=---011000010111000001101001",
			},
			data: "[form]",
		};

		axios
			.request(options) // ? Run POST method with config
			.then(function (response) {
				// ? Once API is called, use the response
				// ? For a successful API call, the status code in the response should be 204 NO CONTEXT
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<div className="jsonNode">
			<span>Output</span>
			<div className="jsonBody">
				<pre>{JSON.stringify(jsonData, undefined, 2)}</pre>
			</div>
			{/* <Editor
				// className="jsonBody"
				value={JSON.stringify(jsonData)}
				onValueChange={(code) => setJsonData(code)}
				highlight={(code) => highlight(code, languages.js)}
				padding={10}
				style={{
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 12,
					width: "100px",
					height: "100px",
				}}
			/> */}
			<div className="buttonRow">
				<Button
					onClick={onGetData}
					type="submit"
					variant="outlined"
					color="info"
					size="small"
				>
					Get Data
				</Button>
				<Button
					onClick={onSubmit}
					type="submit"
					variant="contained"
					color="success"
					size="small"
				>
					Submit
				</Button>
			</div>

			<Handle
				id="a"
				type="target"
				position={Position.Left}
				isConnectable={isConnectable}
			/>
		</div>
	);
};

export default JSONNode;
