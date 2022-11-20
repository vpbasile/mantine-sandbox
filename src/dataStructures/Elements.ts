// >> All data structures will need these things
import { tabularDataSet } from "../helpers/tabularData"

// Re-usable definitions of the data structure
export type prototype = { position: number, name: string, symbol: string, mass: number }
const initialValuesForForm: prototype = { position: 2, name: 'Helium', symbol: 'He', mass: 2.85 }

// >> Define an example set of data
export const exampleData: tabularDataSet = {
	headers: ['Position', 'Name', 'Symbol', 'Mass'],
	data: [
		{ uid: "006", content: [6, 'Carbon', 'C', 12.011] },
		{ uid: "007", content: [7, 'Nitrogen', 'N', 14.007] },
		{ uid: "039", content: [39, 'Yttrium', 'Y', 88.906] },
		{ uid: "056", content: [56, 'Barium', 'Ba', 137.33] },
		{ uid: "058", content: [58, 'Cerium', 'Ce', 140.12] },
	],
	formObject: { initialValues: initialValuesForForm }
}
