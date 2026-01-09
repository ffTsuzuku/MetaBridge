import Grammar from "../../../Database/Grammar"

/**
 * Represents a raw or structured SQL fragment that can be inserted into a 
 * query.
 *
 * Expression Objects signal to the query builder and compiler that the contained
 * value should be rendered literally, rather than treated as a bound 
 * parameter or escaped identifier.
 */
export default abstract class Expression {
	abstract getValue(grammar: Grammar): string|number
}
