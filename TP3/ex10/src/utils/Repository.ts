export class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    if (this.items.some((i) => i.id === item.id)) {
      throw new Error(`Item with id ${item.id} already exists`);
    }
    this.items.push(item);
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter((item) => !predicate(item));
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  findAll(predicate?: (item: T) => boolean): T[] {
    return predicate ? this.items.filter(predicate) : [...this.items];
  }

  getAll(): T[] {
    return [...this.items];
  }

  update(id: number, updateData: Partial<Omit<T, 'id'>>): T | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;

    this.items[index] = { ...this.items[index], ...updateData };
    return this.items[index];
  }
}
