import { Person, Role } from './Person';

export class User extends Person {
  constructor(id: number, name: string, role: Role = 'User') {
    super(id, name, role);
  }
}

export class Admin extends Person {
  constructor(id: number, name: string) {
    super(id, name, 'Admin');
  }
}
