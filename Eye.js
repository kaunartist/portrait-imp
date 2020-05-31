import Part from "./Part.js";

class Eye extends Part {
	constructor(params) {
		super(params);
    this.emotion = 'happy';
	}

	draw() {
    switch(this.emotion) {
      case 'neutral':
        return this.drawNeutral();
        break;
      case 'happy':
        return this.drawHappy();
        break;
    }
  }

  drawNeutral() {
    const eye = new paper.Path.Rectangle(
      new paper.Rectangle(
        new paper.Point(8,26),
        new paper.Point(12,36)
      ),
      new paper.Size(2,2)
    );
    eye.fillColor = "#000000";
    if (this.flip) {
      eye.translate(new paper.Point(20, 0));
    }
    return eye;
  }

  drawHappy() {
    const eye = new paper.Path.Rectangle(
      new paper.Rectangle(
        new paper.Point(4,28),
        new paper.Point(12,32)
      ),
      new paper.Size(1,1)
    );
    eye.fillColor = "#000000";
    if (this.flip) {
      eye.translate(new paper.Point(24, 0));
    }
    return eye;
  }

  drawSad() {
  }

  drawSuspicious() {
  }

  drawTired() {
    const eye = new paper.Path.Rectangle(
      new paper.Rectangle(
        new paper.Point(4,28),
        new paper.Point(12,32)
      ),
      new paper.Size(1,1)
    );
    eye.fillColor = "#000000";
    if (this.flip) {
      eye.translate(new paper.Point(24, 0));
    }
    return eye;
  }
}

export default Eye;
