import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatAmount, formatDate } from "../utils/utils";
import { fetchIncomes } from '../slice/incomeSlice';
import { DataGrid } from '@mui/x-data-grid';

export default function IncomeTable() {
	const dispatch = useDispatch();
	const incomes = useSelector((state) => state.incomes.data);
	const status = useSelector((state) => state.incomes.status);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchIncomes());
		}
	}, [status, dispatch]);
	
	const columns = [
		{
			field: "income_category_name",
			headerName: 'Income Type',
			headerAlign: 'left',
			align: 'left',
			flex: 1,
			minWidth: 80,
			renderCell: ({row}) => row.Income_Category.name
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