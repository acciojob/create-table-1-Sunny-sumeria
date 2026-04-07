function insert_Row() {
    //Write your code here
    // 1. Get the table element by its ID
    let table = document.getElementById("sampleTable");

    // 2. Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // 3. Insert the first cell (left) and set its value
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";

    // 4. Insert the second cell (right) and set its value
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";

  
}
