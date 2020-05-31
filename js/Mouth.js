import Part from "./Part.js";

class Mouth extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		const mouth = 	new paper.Path.Rectangle(
			new paper.Rectangle(
				new paper.Point(16,52),
				new paper.Point(24,56)
			),
			new paper.Size(0.8,0.8)
		);
		mouth.fillColor = "#333333";
		return mouth;
	}
}

export default Mouth;
