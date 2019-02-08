angular
    .module('app')
    .service('tableService', tableService);

function tableService($interval) {
    this.gridOptions = createGridOption();

    this.addRow = function(symbolName){
        this.gridOptions.rowData.push(getNewRow(symbolName));
        this.gridOptions.api.setRowData(this.gridOptions.rowData);
    };

    this.init = () => {
        for (let i = 0; i < initSymbols.length; i++) {
            this.gridOptions.rowData.push(getNewRow(initSymbols[i]));
        }

        const changeGrid = (row, columnIndex) => {
            const value = generateRandomNumber();
            const rowNode = this.gridOptions.api.getRowNode(row.symbol);

            const data = {};
            switch (columnIndex) {
                case 1:
                    data.name = 'low';
                    data.value = value < row.low ? value : row.low;
                    break;
                case 2:
                    data.name = 'high';
                    data.value = value > row.high ? value : row.high;
                    break;
                case 3:
                    data.name = 'change';
                    data.value = row.last - value;
                    break;
                case 4:
                    data.name = 'last';
                    data.value = value < 1 ? 0 : value;
                    break;
            }
            const preparedValue = data.value ?
                parseFloat(data.value.toFixed(2)) : 0;
            rowNode.setDataValue(data.name, preparedValue);
         };

        $interval(() => {
            const countUpdatesRow = Math.floor(Math.random() * this.gridOptions.rowData.length);
            const columnIndex = Math.floor(Math.random() * columnDefs.length);
            changeGrid(this.gridOptions.rowData[countUpdatesRow], columnIndex);
        }, 500);

    };
}

tableService.$inject = ['$interval'];