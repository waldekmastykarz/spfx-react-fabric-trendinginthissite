declare interface IStrings {
  PropertyPaneDescription: string;
  ViewGroupName: string;
  NumberOfDocumentsFieldLabel: string;
}

declare module 'mystrings' {
  const strings: IStrings;
  export = strings;
}
