import * as React from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import { data } from "../data/expense_tips"

export default function ExpenseTips() {
	console.log(data, "expense tips")

  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <List sx={style}>
					{data.map((tip, index) => (
						<>
							<ListItem>
								<ListItemText primary={tip} />
							</ListItem>
							{data.length - 1 !== index && <Divider component="li" />}
						</>
					))}
				</List>
      </CardContent>
    </Card>
  );
}

const style = {
  py: 0,
  width: '100%',
};