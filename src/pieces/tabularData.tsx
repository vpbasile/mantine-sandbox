import { JsxElement } from "typescript";
import { Table } from '@mantine/core';

export type tabularDataSet = {
	headers: string[],
	data: any[][]
}

export function tablularDataSpoof(foo: string, rows: number, columns: number): tabularDataSet {
	// Initialize the table
	let headerList = []
	for (let i = 1; i <= columns; i++) { headerList.push(`Column ${i}`) }
	let dataList = []
	for (let rowCount = 1; rowCount <= rows; rowCount++) {
		let row: any[] = []
		for (let colCount = 1; colCount <= columns; colCount++) {
			row.push(foo)
		}
		dataList.push(row);
	}
	let dataSet: tabularDataSet = {
		headers: headerList,
		data: dataList
	}
	return dataSet;
}

export function tableDisplay(dataSet: tabularDataSet) {
	const data = dataSet.data;
	let colCount = 0;
	const bodyContents = data.map((row) => {
		if (row.length > colCount) colCount = row.length
		return <tr>{row.map((col) => { return <td>{col}</td> })}</tr>
	});
	console.log(`Columns: ${colCount}`);
	let headerCols = dataSet.headers;
	const headerContents = <thead><tr>{headerCols.map((col) => { return (<th>{col}</th>) })}</tr></thead>
	return (
		<Table highlightOnHover striped horizontalSpacing="sm" verticalSpacing="sm" width="75%">
			{headerContents}
			<tbody>{bodyContents}</tbody>
		</Table>
	)
}