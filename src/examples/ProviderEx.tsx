import { MantineProvider, Text, Button, Stack, Anchor,  } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { DatePicker } from '@mantine/dates';

type fixMeLater = any;

type myProps = {
	theme?:fixMeLater,
	text:string,
}

export default function ProviderExample(props:myProps){
	const theme = props.theme;
	const loremIpsum = props.text;
	return (<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
		<Stack align="center" mt={50}>
		  <Text size="xl" weight={500}>
			Mantine Sandbox!
		  </Text>
		  <Anchor href="https://mantine.dev/" target="_blank">Mantine docs</Anchor>
		  <Text size="sm" color="yellow">{loremIpsum}</Text>
		  <RichTextEditor>Placeholder text, perhaps?</RichTextEditor>
		  <DatePicker label="Date:"></DatePicker>
		  <Button>Click the button</Button>
		</Stack>
	  </MantineProvider>)
}