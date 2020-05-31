import Part from "./Part.js";

class Ear extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		const ear = new paper.Path.Arc(
			new paper.Point(0,16),
			new paper.Point(8,3),
			new paper.Point(12,2)
		);
		ear.curveTo(
			new paper.Point(20,0),
			new paper.Point(16,8),
		);
		ear.arcTo(
			new paper.Point(8,17),
			new paper.Point(0,24)
		);

		ear.fillColor = "#F5DFD2";
		if (this.flip) {
			ear.scale(-1, 1);
			ear.translate(new paper.Point(-20,24));
		} else {
			ear.translate(new paper.Point(40,24));
		}
    ear.scale(1.2,1.2);
		return ear;
	}
}

export default Ear;
