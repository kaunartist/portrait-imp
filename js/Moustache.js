import Part from "./Part.js";

class Moustache extends Part {
	constructor(params) {
		super(params);
	}

	draw() {
		const moustache = 	new paper.Path();
    moustache.add(2,10);
    moustache.curveTo(
      new paper.Point(10,3),
      new paper.Point(20,0)
    );
    moustache.curveTo(
      new paper.Point(30,3),
      new paper.Point(38,10)
    );
    moustache.add(32,16);
    moustache.curveTo(
      new paper.Point(28,8),
      new paper.Point(20,5)
    );
    moustache.curveTo(
      new paper.Point(12,8),
      new paper.Point(8,16)
    );
		moustache.fillColor = "#331100";
    moustache.translate(0,46);
		return moustache;
	}
}

export default Moustache;
