export class Column {
   public title:string;
   public dataIndex: string;
   public isShowSort?:boolean;
   public filter?: Array<{ name: string, value: boolean }>;
   public width?:number;
   constructor (title:string, dataIndex: string) {
    this.title = title;
    this.dataIndex = dataIndex;
   }
}

