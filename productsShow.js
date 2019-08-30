let array = [];

function Table() {
    let table = '';
    table += '<table>';
    table += '<tr>';
    table += '<td>STT</td><td>Tên sản phẩm</td><td>Mã SP</td><td>Số lượng</td><td>Giá</td>';
    table += '</tr>';
    for (let i = 0; i < array.length; i++) {
        table += '<tr>';
        table += '<td>' + (i + 1) + '</td>' +
            '<td><input id="' + i + '+name' + '" value="' + array[i].getName() + '" disabled></td>' +
            '<td><input id="' + i + '+id' + '" value="' + array[i].getId() + '" disabled></td>' +
            '<td><input id="' + i + '+amount' + '" value="' + array[i].getAmount() + '" disabled></td>' +
            '<td><input id="' + i + '+value' + '" value="' + array[i].getValue() + '" disabled></td>' +
            '<td><button id="' + i + '+delete' + '" onclick="Delete(this)"><i style=\'font-size:24px\' class=\'fas\'>&#xf1f8;</i></button></td>' +
            '<td><button id="' + i + '+edit' + '" onclick="Edit(this)"><i class="material-icons">&#xe22b;</i></button></td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('table').innerHTML = table;
}

function Add() {
    let name = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let amount = document.getElementById('amount').value;
    let value = document.getElementById('value').value;
    if (name == '' || id == '' || amount == '' || value == '') {
        return alert('Nhập đầy đủ thông tin');
    } else {
        let object = new Object(name, id, amount, value);
        array.push(object);
        Table();
        document.getElementById('name').value = '';
        document.getElementById('id').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('value').value = '';
    }
}

function Delete(del) {
    del.id.split('+');
    if (confirm('Bạn có muốn xóa không ?')) {
        array.splice(del.id[0], 1);
        Table();
    }
}

function Edit(edit) {
    edit.id.split('+');

    if (document.getElementById(edit.id[0] + '+name').disabled == true) {

        document.getElementById(edit.id[0] + '+name').disabled = false;
        document.getElementById(edit.id[0] + '+id').disabled = false;
        document.getElementById(edit.id[0] + '+amount').disabled = false;
        document.getElementById(edit.id[0] + '+value').disabled = false;
    } else {
        document.getElementById(edit.id[0] + '+name').disabled = true;
        document.getElementById(edit.id[0] + '+id').disabled = true;
        document.getElementById(edit.id[0] + '+amount').disabled = true;
        document.getElementById(edit.id[0] + '+value').disabled = true;
    }
    let name = document.getElementById(edit.id[0] + '+name').value;
    let id = document.getElementById(edit.id[0] + '+id').value;
    let amount = document.getElementById(edit.id[0] + '+amount').value;
    let value = document.getElementById(edit.id[0] + '+value').value;
    array[edit.id[0]].setName(name);
    array[edit.id[0]].setId(id);
    array[edit.id[0]].setAmount(amount);
    array[edit.id[0]].setValue(value);
}

function Search() {
    let search = document.getElementById('search').value;
    for (let i = 0; i < array.length; i++) {
        if (search == array[i].getName() || search == array[i].getId()) {
            let table = '';
            table += '<table>';
            table += '<tr>';
            table += '<td>STT</td><td>Tên sản phẩm</td><td>Mã SP</td><td>Số lượng</td><td>Giá</td>';
            table += '</tr>';
            table += '<tr>';
            table += '<td>' + (i + 1) + '</td>' +
                '<td><input id="' + i + '+name' + '" value="' + array[i].getName() + '" disabled></td>' +
                '<td><input id="' + i + '+id' + '" value="' + array[i].getId() + '" disabled></td>' +
                '<td><input id="' + i + '+amount' + '" value="' + array[i].getAmount() + '" disabled></td>' +
                '<td><input id="' + i + '+value' + '" value="' + array[i].getValue() + '" disabled></td>' +
                '<td><button id="' + i + '+delete' + '" onclick="Delete(this)"><i style=\'font-size:24px\' class=\'fas\'>&#xf1f8;</i></button></td>' +
                '<td><button id="' + i + '+edit' + '" onclick="Edit(this)"><i class="material-icons">&#xe22b;</i></button></td>' +
                '<td><button onclick="Table()">OK</button></td>';
            table += '</tr>';
            table += '</table>';
            document.getElementById('result').innerHTML = table;
            return;
        } else {
            document.getElementById('result').innerHTML = 'Không tìm thấy!';
        }
    }
}

let object1=new Object('Oppo','F11',12,5700000);
let object2=new Object('Samsung','S10',12,19500000);
let object3=new Object('Iphone','Xs Max',12,21500000);


array.push(object1);
array.push(object2);
array.push(object3);

 Table();


