export class ColumnMap {
  primaryKey: string;
  private _header: string;
  private _format: string;
  alternativeKeys?: string[];



  constructor ( settings ) {
    this.primaryKey = settings.primaryKey;
    this.header = settings.header;
    this.alternativeKeys = settings.alternativeKeys;
  }

  set header(setting: string) {
    this._header = setting ?
      setting :
      this.primaryKey.slice(0, 1).toUpperCase() +
      this.primaryKey.replace(/_/g, ' ' ).slice(1)
  }

  get header() {
    return this._header;
  }

  access(object: any ) {
    if (object[this.primaryKey] || !this.alternativeKeys) {
      return this.primaryKey;
    }
    for (let key of this.alternativeKeys) {
      if (object[key]) {
        return key;
      }
    }
    return this.primaryKey;
  }
}
