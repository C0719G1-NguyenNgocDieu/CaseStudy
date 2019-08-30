function Object(name, id, amount, value) {
    this.name = name;
    this.id = id;
    this.amount = amount;
    this.value = value;

    this.setName = function (name) {
        this.name = name;
    };
    this.setId = function (id) {
        this.id = id;
    };
    this.setAmount = function (amount) {
        this.amount = amount;
    };
    this.setValue = function (value) {
        this.value = value;
    };

    this.getName = function () {
        return this.name;
    };
    this.getId = function () {
        return this.id;
    };
    this.getAmount = function () {
        return this.amount;
    };
    this.getValue = function () {
        return this.value;
    };
}
