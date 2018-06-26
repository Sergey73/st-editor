import { Component, OnInit } from '@angular/core';
import { EditPanelService } from '../helper/edit-panel.service';

@Component({
  selector: 'st-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

  options = [
    { sysName: 'createTrack', name: 'Создать маршрут', icon: 'assets/img/create-track.png' },
    { sysName: 'checkpoint', name: 'Добавить чекпоинт', icon: 'assets/img/add-checkpoint.png' },
  ];

  type: string = this.options[0].sysName;
  constructor(
    private editPanelService: EditPanelService,
  ) { }

  ngOnInit() {
  }

  checkedType(type) {
    this.type = type;
    this.editPanelService.setMode(type);
  }

}
