import Part from "./Part.js";

class Nose extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		const nose = 	new paper.Path.Rectangle(
			new paper.Rectangle(
				new paper.Point(17,30),
				new paper.Point(23,46)
			),
			new paper.Size(0.8,0.8)
		);
		nose.fillColor = "#FF9999";
		return nose;
	}
}

export default Nose;
