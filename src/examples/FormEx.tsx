import { Text, TextInput, Checkbox, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

type thisStructure = { email: string, termsOfService: boolean }
const initialValuesForForm: thisStructure = {
	email: '',
	termsOfService: false,
}

export default function FromEx() {
	const formEmail = useForm({
		initialValues: initialValuesForForm,
	});

	const [displayData, setDisplayData] = useState("Nothing Entered Yet");

	function mySubmitFunction(submittedValues: { email: string; termsOfService: boolean; }) {
		console.log(submittedValues);
		setDisplayData(submittedValues.email)

	}

	return (
		<Box sx={{ maxWidth: 300 }} mx="auto">

			<Text>{displayData}</Text>
			<form onSubmit={formEmail.onSubmit((values) => mySubmitFunction(values))}>
				<TextInput
					label="First Field"
					placeholder="Placeholder text"
					{...formEmail.getInputProps('email')}
				/>

				<Checkbox
					mt="md"
					label="Checkbox label"
					{...formEmail.getInputProps('termsOfService', { type: 'checkbox' })}
				/>

				<Button type="submit">Submit</Button>
			</form>
		</Box>)
}