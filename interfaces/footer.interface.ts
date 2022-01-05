export interface IFooter {
  policies: string[];
  offices: object[];
  pages: string[];
  followUs: IFollowUs[];
  copyright: string;
}

export interface IFollowUs {
  icon: Function;
  redirectTo: string;
}
