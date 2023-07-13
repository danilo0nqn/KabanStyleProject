export interface Results {
  data: IRandomContact[];
  support: Support;
}

export interface SingleResult {
  data: IRandomContact;
  support: Support;
}

export interface IRandomContact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}
