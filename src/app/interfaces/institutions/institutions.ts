export interface Institutions {
  id: number;
  name: string;
  pid: string;
  number: string;
  created_at: string;
  updated_at: string;
}


export interface CreateInstitution {
  number: number;
  name: string;
  pid: string;
}
