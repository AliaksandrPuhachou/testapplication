const minNumber = 100,
      maxNumber = 10000;

const columnDefs = [
    {headerName: 'Symbol', field: 'symbol'},
    {headerName: 'Last', field: 'last', cellRenderer:'agAnimateShowChangeCellRenderer'},
    {headerName: 'Change', field: 'change', cellRenderer: 'agAnimateShowChangeCellRenderer'},
    {headerName: 'High', field: 'high', cellRenderer: 'agAnimateShowChangeCellRenderer'},
    {headerName: 'Low', field: 'low', cellRenderer: 'agAnimateShowChangeCellRenderer'}
];

const initSymbols = [
    'AAPL',
    'ESH8',
    'NQH8',
    'CLK8'
];

function getNewRow(name){
    const value = generateRandomNumber(minNumber, minNumber);
    return {
        symbol: name,
        last: value,
        change: value,
        high: value,
        low: value
    };
}

function generateRandomNumber(){
    return parseFloat( Math.random() * ( maxNumber - minNumber));
}

function createGridOption() {
    return {
        columnDefs: columnDefs,
        rowData: [],
        angularCompileRows: true,
        enableSorting: true,
        rowHeight: 35,
        enableColResize: true,
        animateRows: true,
        getRowNodeId: data => data.symbol,
        defaultColDef: {
            valueFormatter: function (params) {
                if(params.colDef.field !== 'symbol'){
                    return parseFloat(params.value.toFixed(2));
                }
            }
        },
    };
}