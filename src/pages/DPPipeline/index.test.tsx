import renderer from "react-test-renderer";
import DPPipeline from "./index";
import { it, expect } from "bun:test";

it("renders the dp pipeline page", () => {
	const component = renderer.create(<DPPipeline />);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	renderer.act(() => {
		if (tree !== null) {
			tree.props.onMouseEnter();
		}
	});
});
