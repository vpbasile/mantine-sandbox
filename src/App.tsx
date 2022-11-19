
// << Imports for Mantine
import {
  MantineProvider,
  // Style components
  useMantineTheme,
  // Layout components
  Stack, Table,
  // Text elements
  Text, Anchor,
  // Form elements
  Button,
  Paper,
  MantineThemeOverride,
  Title
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import RichTextEditor from "@mantine/rte";
import { theme } from "./theme";

// << Import Pieces 
import { loremIpsum } from './pieces/lorem'
import { tableDisplay, tablularDataSpoof, tabularDataSet } from './pieces/tabularData'

export default function App() {
  const myTheme: MantineThemeOverride = theme;

  const otherData: tabularDataSet = {
    headers: ["RowName","First","Second","Third","Final"],
    data:[
      ["Row One","Thing","Stuff","FIller","Strings"],
      ["Additional Row","String","Number","Type","Filler"]
    ]
  }

  return (<MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
    <Title order={1} size="h1">
      Mantine Sandbox!
    </Title>
    <Anchor href="https://mantine.dev/" target="_blank">Mantine docs</Anchor>
    {tableDisplay(otherData)}
    {/* {tableDisplay(tablularDataSpoof("One2", 12, 6))} */}
  </MantineProvider>)
}

