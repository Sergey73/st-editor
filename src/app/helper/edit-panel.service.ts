import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditPanelService {

  private paramsMode: {
    selected: string;
  } = {
    selected: null,
  };

  constructor() { }

  setMode(type) {
    this.paramsMode.selected = type;
  }

  getMode() {
    return this.paramsMode;
  }
}
