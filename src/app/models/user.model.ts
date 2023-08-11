export class User {
  codUser?: number;
  username?: string;
  name?: string;
  password?: string;
  img?: string;
  role?: string;
  attempts?: number;
  active?: boolean;
  blocked?: boolean;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  
    constructor(
      codUser?: number,
      username?: string,
      name?: string,
      password?: string,
      img?: string,
      role?: string,
      attempts?: number,
      active?: boolean,
      blocked?: boolean,
      createdAt?: Date,
      createdBy?: string,
      updatedAt?: Date,
      updatedBy?: string,
    ) {
    /*   this.id = id;
      this.username = username;
      this.name = name;
      this.password = password;
      this.role = role;
      this.admin = admin;
      this.attempts = attempts;
      this.active = active;
      this.blocked = blocked; */
    }
  }