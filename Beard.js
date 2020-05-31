import Part from "./Part.js";

class Beard extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		const beard = 	new paper.Path();
    beard.add(0,0);
    beard.curveTo(
      new paper.Point(2,42),
      new paper.Point(20,72)
    );
    beard.curveTo(
      new paper.Point(38,42),
      new paper.Point(40,0)
    );
    beard.curveTo(
      new paper.Point(34,20),
      new paper.Point(20,28)
    );
    beard.curveTo(
      new paper.Point(6,20),
      new paper.Point(0,0)
    );
		beard.fillColor = "#331100";
    beard.translate(0,36);
		return beard;
	}
}

export default Beard;
