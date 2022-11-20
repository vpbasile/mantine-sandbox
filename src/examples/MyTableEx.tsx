import { Container, Button, Collapse } from "@mantine/core";
import { useState } from "react";
import { tableDisplay, tablularDataSpoof } from "../helpers/tabularData";

export default function MyTable() {
	const [newFormOpened, setnewFormOpened] = useState(false);
	return (

		<Container>
			<Button color="gray" onClick={() => setnewFormOpened((o) => !o)}>
				Toggle Table
			</Button>
			<Collapse in={newFormOpened}>
				<Container size={"lg"} px={0}>
					{/* {tableDisplay(otherData)} */}
					{tableDisplay(tablularDataSpoof("One2", 24, 6))}
				</Container>
			</Collapse>
		</Container>
	)
}