import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { formatAmount, formatDate } from "../utils/utils";
import { expenses } from "../data/category_expense_table";

export default function CategoryExpenseTable() {
	
	const columns = [
		{
			field: "expense_category_name",
			headerName: 'Category',
			headerAlign: 'left',
			align: 'left',
			flex: 1,
			minWidth: 80,
		},
		{
			field: "spending_limit",
			headerName: 'Spending Limit',
			headerAlign: 'left',
			align: 'left',
			flex: 1,
			minWidth: 100,
			renderCell: (params) => formatAmount(params.value)
		},
		{
			field: "current_spend",
			headerName: 'Current Spend',
			headerAlign: 'left',
			align: 'left',
			flex: 1,
			minWidth: 120,
			renderCell: (params) => formatAmount(params.value)
		}
	];

	return (
		<DataGrid
			rows={expenses}
			columns={columns}
			getRowClassName={(params) =>
				params.indexRelativeToCurrentPage % 1 === 0 ? 'even' : 'odd'
			}
			initialState={{
				pagination: { paginationModel: { pageSize: 10 } },
			}}
			pageSizeOptions={[10, 20, 30]}
			disableColumnResize
			density="compact"
			slotProps={{
				filterPanel: {
					filterFormProps: {
						logicOperatorInputProps: {
							variant: 'outlined',
							size: 'small',
						},
						columnInputProps: {
							variant: 'outlined',
							size: 'small',
							sx: { mt: 'auto' },
						},
						operatorInputProps: {
							variant: 'outlined',
							size: 'small',
							sx: { mt: 'auto' },
						},
						valueInputProps: {
							InputComponentProps: {
								variant: 'outlined',
								size: 'small',
							},
						},
					},
				},
			}}
		/>
	);
}