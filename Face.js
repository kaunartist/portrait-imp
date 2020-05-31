import Part from "./Part.js";
import faceTypes from "./FaceTypes.js";

class Face extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		switch(this.faceType) {
			case faceTypes.GEM:
				return this.drawGem();
			case faceTypes.HUMAN:
				return this.drawHuman();
		}
	}

	drawGem() {
		//const face = two.makePath(0,0, 0,20, 10,28, 20,20, 20,0, 10,-8, false);
		face.fill = "#75FFD2";
		face.stroke = "#666666";
		return face;
	}

	drawHuman() {
		const face = new paper.Path.Arc(new paper.Point(0,16),
																		new paper.Point(20, 0),
																		new paper.Point(40,16));
		face.add([40, 56]);
		face.arcTo(new paper.Point(20, 72), new paper.Point(0, 56));
		face.add([0, 16]);
		face.fillColor = "#F5DFD2";
		return face;
	}
}

export default Face;
