import { Table } from '@mantine/core';
import { numberTOuid } from './stringFunc';

export type dataRow = { uid: string, content: any[] }
export type tabularDataSet = {
	headers: string[],
	data: dataRow[],
	formObject: any
}

export function tablularDataSpoof(foo: string, rows: number, columns: number): tabularDataSet {
	// Initialize the table
	let headerList = []
	for (let i = 1; i <= columns; i++) { headerList.push(`Column ${i}`) }
	let dataList: dataRow[] = []
	for (let rowCount = 1; rowCount <= rows; rowCount++) {
		let row: dataRow = { uid: numberTOuid(rowCount, 3), content: [] }
		for (let colCount = 1; colCount <= columns; colCount++) {
			row.content.push(foo)
		}
		dataList.push(row);
	}
	let dataSet: tabularDataSet = {
		headers: headerList,
		data: dataList,
		formObject:
		// This is all wrong
		{
			initialValues: {
				position: 2,
				name: 'Helium',
				symbol: 'He',
				mass: '2.85',
			}
		}
	}
	return dataSet;
}

export function tableDisplay(dataSet: tabularDataSet) {
	const data = dataSet.data;
	let headerCols = dataSet.headers;
	const headerContents = <thead><tr>{headerCols.map((col) => { return (<th>{col}</th>) })}
		<th>Edit</th>
		<th>Delete</th></tr></thead>
	let colCount = 0;
	const bodyContents = data.map((row) => {
		const rowContents = row.content;
		if (rowContents.length > colCount) colCount = rowContents.length
		return <tr>{rowContents.map((col) => { return <td>{col}</td> })}<td>Edit</td><td>Delete</td></tr>
	});
	return (
		<Table highlightOnHover withBorder horizontalSpacing='sm' verticalSpacing='sm' width='75%' bg={'black'} >
			{headerContents}
			<tbody>{bodyContents}</tbody>
		</Table>
	)
}