// 1 Fonction générique identity
function identity<T>(value: T): T {
  return value;
}

console.log("Identity string:", identity<string>("Hello TS"));
console.log("Identity number:", identity<number>(42));

// 2 Fonction générique getFirst
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log("First number:", getFirst<number>([10, 20, 30]));
console.log("First string:", getFirst<string>(["a", "b", "c"]));

// 3 Classe générique Repository
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getAll(): T[] {
    return this.items;
  }
}

// Exemple d'utilisation
const numberRepo = new Repository<number>();
numberRepo.add(1);
numberRepo.add(2);
numberRepo.add(3);
console.log("Numbers in repo:", numberRepo.getAll());
numberRepo.remove(2);
console.log("After remove 2:", numberRepo.getAll());

const stringRepo = new Repository<string>();
stringRepo.add("apple");
stringRepo.add("banana");
console.log("Strings in repo:", stringRepo.getAll());

//4 Interface générique ApiResponse
interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Exemple d'utilisation
const response1: ApiResponse<number[]> = {
  data: [1, 2, 3]
};

const response2: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Sahar" },
  error: "No error"
};

console.log("Response1:", response1);
console.log("Response2:", response2);
