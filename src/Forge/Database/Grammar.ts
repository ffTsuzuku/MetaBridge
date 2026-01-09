import Expression from "../Contracts/Database/Query/Expression";
import Connection from "./Connection";

export default abstract class Grammar {
	protected connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	isExpression(value: unknown): value is Expression {
		return value instanceof Expression
	}
}
