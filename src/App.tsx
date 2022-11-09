import { MantineProvider, Text, Button, Stack,  } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { DatePicker } from '@mantine/dates';
import { theme } from "./theme";

export default function App() {
  const loremIpsum = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non provident, commodi ex, mollitia sed magni, quae labore quas quibusdam totam odit at perspiciatis pariatur optio accusantium deserunt ratione! Rerum, non."

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Stack align="center" mt={50}>
        <Text size="xl" weight={500}>
          Mantine Sandbox!
        </Text>
        <Text size="sm" color="yellow">{loremIpsum}</Text>
        
        <RichTextEditor></RichTextEditor>
        <DatePicker label="Date:"></DatePicker>
        <Button>Click the button</Button>
      </Stack>
    </MantineProvider>
  );
}
