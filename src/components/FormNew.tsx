import React from "react";
import { Dialog, Group, TextInput, Button, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { numberTOuid } from "../helpers/stringFunc";
import { dataRow, tabularDataSet } from "../helpers/tabularData"

// Using the Elements data structur
import { exampleData } from '../dataStructures/Elements'

type myProps = {
	newFormOpened: boolean;
	setnewFormOpened: any;
	dataSet: tabularDataSet;
	addNewRow: (newRow: dataRow) => void;
}

export default function formNew(props: myProps) {
	// Props
	const newFormOpened = props.newFormOpened;
	const setnewFormOpened = props.setnewFormOpened;
	const dataSet = props.dataSet;
	const addNewRow = props.addNewRow;

	// Define forms 
	// const NewEntryForm = useForm(dataSet.formObject)

	// A field for each data column
	const dataFields = props.dataSet.headers;
	function handleFormEntry() {
		const newUID = numberTOuid(dataSet.data.length, 3);
		addNewRow({
			uid: newUID,
			content: ["New", "New", "New", "New"]
		});
		setnewFormOpened(false);
	}

	return (<Dialog
		opened={newFormOpened}
		withCloseButton
		onClose={() => setnewFormOpened(false)}
		size="xl"
		radius="md"
	>
		<Text size="sm" style={{ marginBottom: 10 }} weight={500}>
			Create a new row
		</Text>
		<Group>
			{dataFields.map((field) => { return <TextInput placeholder={field} style={{ flex: 1 }} /> })}
			<Button variant={"gradient"} onClick={() => handleFormEntry()}>Create</Button>
		</Group>
	</Dialog>)
}