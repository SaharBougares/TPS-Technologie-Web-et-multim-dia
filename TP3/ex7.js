// 1 Fonction générique identity
function identity(value) {
    return value;
}
console.log("Identity string:", identity("Hello TS"));
console.log("Identity number:", identity(42));
// 2 Fonction générique getFirst
function getFirst(arr) {
    return arr[0];
}
console.log("First number:", getFirst([10, 20, 30]));
console.log("First string:", getFirst(["a", "b", "c"]));
// 3 Classe générique Repository
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
// Exemple d'utilisation
var numberRepo = new Repository();
numberRepo.add(1);
numberRepo.add(2);
numberRepo.add(3);
console.log("Numbers in repo:", numberRepo.getAll());
numberRepo.remove(2);
console.log("After remove 2:", numberRepo.getAll());
var stringRepo = new Repository();
stringRepo.add("apple");
stringRepo.add("banana");
console.log("Strings in repo:", stringRepo.getAll());
// Exemple d'utilisation
var response1 = {
    data: [1, 2, 3]
};
var response2 = {
    data: { id: 1, name: "Sahar" },
    error: "No error"
};
console.log("Response1:", response1);
console.log("Response2:", response2);
