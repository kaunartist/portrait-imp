import Part from "./Part.js";

class Nose extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		const nose = 	new paper.Path.Rectangle(
			new paper.Rectangle(
				new paper.Point(17,28),
				new paper.Point(23,45)
			),
			new paper.Size(2,2)
		);
		nose.fillColor = "#FF8888";
		return nose;
	}
}

export default Nose;
