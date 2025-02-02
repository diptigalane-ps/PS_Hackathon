import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { formatAmount, formatDate } from "../utils/utils";
import { fetchExpenses } from '../slice/expenseSlice';

export default function ExpenseTable() {
	const dispatch = useDispatch();
	const expenses = useSelector((state) => state.expenses.data);
	const status = useSelector((state) => state.expenses.status);
  const error = useSelector((state) => state.expenses.error);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchExpenses());
		}
	}, [status, dispatch]);

	const columns = [
		{
			field: "expense_category_name",
			headerName: 'Expense Type',
			headerAlign: 'left',
			align: 'left',
			flex: 1,
			minWidth: 80,
			renderCell: ({row}) => row.Expense_Category.name
		},
		{
			field: "date",
			headerName: 'Date',
			headerAlign: 'left',
			align: 'left',
			flex: 1,
			minWidth: 100,
			renderCell: (params) => formatDate(params.value)
		},
		{
			field: "amount",
			headerName: 'Amount',
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