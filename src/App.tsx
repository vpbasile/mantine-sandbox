
// << Imports for Mantine
import {
  MantineProvider,
  Anchor, Title,
  MantineThemeOverride,
  Header,
  Button,
  Container,
  ScrollArea} from "@mantine/core";
import { dataRow, tableDisplay, tabularDataSet } from "./helpers/tabularData";
import { exampleData } from "./dataStructures/Elements";
import { useState } from "react";
import FormNew from "./components/FormNew";
import { theme } from "./theme";
// import FromEx from "./examples/FormEx";


// << Import Pieces 

export default function App() {
  const myTheme: MantineThemeOverride = theme;
  const [newFormOpened, setnewFormOpened] = useState(false);

  const [dataState, setDataState] = useState(exampleData)
  function addRow(newRow: dataRow) {
    let newState: tabularDataSet = dataState;
    newState.data.push(newRow);
    setDataState(newState);
  }

  return (<MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
    <Header height="15%" p="md">
      <Title order={1} size="h1">Mantine Sandbox!</Title>
      <Anchor href="https://mantine.dev/" target="_blank">Mantine docs</Anchor>
    </Header>
    {/* <FromEx /> */}
    <Container size={"md"}>
      <ScrollArea style={{ height: "100%" }} type="always" offsetScrollbars>
        <Title order={2} p={"lg"}>Form Test</Title>
        {tableDisplay(dataState)}
        <Button fullWidth variant="gradient" disabled={newFormOpened}
          onClick={() => setnewFormOpened((o) => !o)}>Add new</Button>
      </ScrollArea>
    </Container>
    <FormNew dataSet={dataState} addNewRow={addRow}
      newFormOpened={newFormOpened} setnewFormOpened={setnewFormOpened}></FormNew>

  </MantineProvider>)
}

