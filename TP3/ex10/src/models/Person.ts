export type Role = 'User' | 'Admin';

export abstract class Person {
  constructor(
    public id: number,
    public name: string,
    public role: Role,
  ) {}
}
