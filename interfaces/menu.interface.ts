export interface IMenu {
  backgroundColor: string;
  titlesColor: string;
  children: any;
  titles: string[];
  positionType?: string;
}

export interface INavigation {
  titles: string[];
  titlesColor: string;
  setOnHoverElement: Function;
  onHoverElement: string | null;
}

export interface IBackgroundColor {
  backgroundColor: string;
}
