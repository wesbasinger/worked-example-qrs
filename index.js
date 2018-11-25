const fs = require("fs");
const path = require("path");

const qr = require("qr-image");

const GITHUB_STEM = "https://raw.githubusercontent.com/wesbasinger/worked-example-qrs/master/";

const IMG_DIR = "dilation";

const FULL_DIR = path.join(__dirname, IMG_DIR)

const imgs = fs.readdirSync(FULL_DIR)

const fullLinks = []

let idx = 1;

imgs.forEach((img) => {
	
	const composedLink = `${GITHUB_STEM}${IMG_DIR}/${img}`;

	const qr_png = qr.image(composedLink, {type: "png"});

	qr_png.pipe(require("fs").createWriteStream(`${FULL_DIR}/__${idx}__.png`));

	idx ++

})
