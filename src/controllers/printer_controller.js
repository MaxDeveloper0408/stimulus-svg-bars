import { Controller } from "stimulus"

export default class extends Controller {
	static  values = { 
		printer: Array,
		url: String
	}
	static targets = [  "bardraw",
	"production", 
	"distribution",
	"use",
	"end_of_life",
	"production_svg", 
	"distribution_svg",
	"use_svg",
	"end_of_life_svg" 
	]

	connect() {
		fetch(this.urlValue).then(/* … */)
		console.log("Stimulus works well");
	}
	draw() {
		const element = this.bardrawTarget;

		const production = this.productionTarget;
		const distribution = this.distributionTarget;
		const use = this.useTarget;
		const end_of_life = this.end_of_lifeTarget;

		const production_svg = this.production_svgTarget;
		const distribution_svg = this.distribution_svgTarget;
		const use_svg = this.use_svgTarget;
		const end_of_life_svg = this.end_of_life_svgTarget;

		production.height.baseVal.newValueSpecifiedUnits(1, 20);
		production_svg.height.baseVal.newValueSpecifiedUnits(1, 20);

		distribution.height.baseVal.newValueSpecifiedUnits(1, 20);
		distribution_svg.height.baseVal.newValueSpecifiedUnits(1, 20);

		use.height.baseVal.newValueSpecifiedUnits(1, 20);
		use_svg.height.baseVal.newValueSpecifiedUnits(1, 20);

		end_of_life.height.baseVal.newValueSpecifiedUnits(1, 20);
		end_of_life_svg.height.baseVal.newValueSpecifiedUnits(1, 20);
		
	}
}
