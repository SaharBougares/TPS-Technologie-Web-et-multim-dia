export interface Student {
  id: number;
  name: string;
  classe?: string;
}

export const Students: Student[] = [
  { id: 1, name: 'Asma', classe: 'IGL3' },
  { id: 2, name: 'Oumaima', classe: 'IGL4' },
  { id: 3, name: 'Raouf', classe: 'IGL5' },
  { id: 4, name: 'Ibrahim', classe: 'IDS3' },
  { id: 5, name: 'Nour', classe: 'IDS4' },
  { id: 6, name: 'Rihem', classe: 'IDS4' },
  { id: 7, name: 'Dyama', classe: 'IDS5' },
  { id: 8, name: 'Dr IQ', classe: 'IGL3' },
  { id: 9, name: 'Howa', classe: 'IGL4' },
  { id: 10, name: 'Hiya', classe: 'IGL4' }
];
