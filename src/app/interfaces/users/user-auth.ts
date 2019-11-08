export interface UserAuth {
  email: string;
  password: string;
}

export interface User {
  permissions: Set<string>;
  id: number;
  name: string;
  email: string;
  api_token: null;
  created_at: string;
  updated_at: string;
  roles: UserRoles[];
  password: string;
}


export interface UserRoles {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  permissions: UserPermission[];
}

export interface UserPermission {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}

export interface CreateUser {
  name: string;
  email: string;
  role_id: number;
  password: string;
}

export interface UpdateUser {
  name: string;
  email: string;
  role_id: number;
  password: string;
}
