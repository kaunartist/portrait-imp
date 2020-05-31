import Part from "./Part.js";
import Face from "./Face.js";
import Mouth from "./Mouth.js";
import Ear from "./Ear.js";
import Eye from "./Eye.js";
import Nose from "./Nose.js";
import Beard from "./Beard.js";
import Moustache from "./Moustache.js";
import faceTypes from "./FaceTypes.js";

const partTypes = {
	EYE: 'eye',
	EAR: 'ear',
	NOSE: 'nose',
	MOUTH: 'mouth',
	HEAD: 'head',
	HAIR: 'hair',
	BEARD: 'beard',
	MOUSTACHE: 'moustache',
	GLASSES: 'glasses',
	OTHER: 'other'
};

class Portrait {
	constructor(face) {
		this.faceType = face;
		this.group = new paper.Group({ position: paper.view.center });
		this.parts = [];
		switch(face) {
			case faceTypes.GEM:
				this.parts.push(new Face({ faceType: face, partType: partTypes.FACE, flip: false }));
				this.parts.push(new Eye({ faceType: face, partType: partTypes.EYE, flip: true }));
				this.parts.push(new Eye({ faceType: face, partType: partTypes.EYE, flip: false }));
				this.parts.push(new Mouth({ faceType: face, partType: partTypes.MOUTH, flip: false }));
				break;
			case faceTypes.HUMAN:
				this.parts.push(new Face({ faceType: face, partType: partTypes.FACE, flip: false }));
				this.parts.push(new Eye({ faceType: face, partType: partTypes.EYE, flip: true }));
				this.parts.push(new Eye({ faceType: face, partType: partTypes.EYE, flip: false }));
				this.parts.push(new Ear({ faceType: face, partType: partTypes.EAR, flip: true }));
				this.parts.push(new Ear({ faceType: face, partType: partTypes.EAR, flip: false }));
				this.parts.push(new Mouth({ faceType: face, partType: partTypes.MOUTH, flip: false }));
				this.parts.push(new Nose({ faceType: face, partType: partTypes.NOSE, flip: false }));
				this.parts.push(new Moustache({ faceType: face, partType: partTypes.MOUSTACHE, flip: false }));
				this.parts.push(new Beard({ faceType: face, partType: partTypes.BEARD, flip: false }));
				break;
			default:
				break;
		}
	}

	draw() {
		for (let i = 0; i < this.parts.length; i++) {
			this.group.addChild(this.parts[i].draw());
		}
		this.group.translate(new paper.Point(100, 60));
		this.group.scale(0.5);
	}
}

function init() {

	const canvas = document.getElementById('root');
	paper.setup(canvas);

	const portrait = new Portrait(faceTypes.HUMAN);
	portrait.draw();
	paper.view.draw();
}

window.onload = function() {
	init();
}
