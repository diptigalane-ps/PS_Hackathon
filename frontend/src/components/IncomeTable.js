import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { formatAmount, formatDate } from "../utils/utils";
import { fetchIncomes } from '../slice/incomeSlice';

export default function IncomeTable() {
	const dispatch = useDispatch();
	const incomes = useSelector((state) => state.incomes.data);
	const status = useSelector((state) => state.incomes.status);
  const error = useSelector((state) => state.incomes.error);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchIncomes());
		}
	}, [status, dispatch]);
	
	const columns = [
		{
			field: "income_category_name",
			headerName: 'Income Type',
			headerAlign: 'right',
			align: 'right',
			flex: 1,
			minWidth: 80,
		},
		{
			field: "date",
			headerName: 'Date',
			headerAlign: 'right',
			align: 'right',
			flex: 1,
			minWidth: 100,
			renderCell: (params) => formatDate(params.value)
		},
		{
			field: "amount",
			headerName: 'Amount',
			headerAlign: 'right',
			align: 'right',
			flex: 1,
			minWidth: 120,
			renderCell: (params) => formatAmount(params.value)
		}
	];

  return (
    <DataGrid
      rows={incomes}
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