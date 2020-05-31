import Part from "./Part.js";

class Eye extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		const eye = new paper.Path.Rectangle(
			new paper.Rectangle(
				new paper.Point(8,26),
				new paper.Point(12,36)
			),
			new paper.Size(0.8, 0.8)
		);
		eye.fillColor = "#333333";
		if (this.flip) {
			eye.translate(new paper.Point(20, 0));
		}
		return eye;
	}
}

export default Eye;
