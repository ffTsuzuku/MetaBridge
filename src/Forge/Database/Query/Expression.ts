import ExpressionContract from "../../Contracts/Database/Query/Expression";
import Grammar from "../Grammar";

export default class Expression implements ExpressionContract {
	protected readonly value: string|number;

	constructor(value: string|number) {
		this.value = value
	}

	getValue(_: Grammar): string | number {
		return this.value
	}
}
