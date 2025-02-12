import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceTypeX } from '../../accessories.interfaces';
import { HumidifierDehumidifierManageComponent } from './humidifierdehumidifier.manage.component';

@Component({
  selector: 'app-humidifierdehumidifier',
  templateUrl: './humidifierdehumidifier.component.html',
  styleUrls: ['./humidifierdehumidifier.component.scss'],
})
export class HumidifierDehumidifierComponent implements OnInit {
  @Input() public service: ServiceTypeX;
  model = 1;

  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit() {}

  onClick() {
    this.service.getCharacteristic('Active').setValue(this.service.values.Active ? 0 : 1);
  }

  onLongClick() {
    const ref = this.modalService.open(HumidifierDehumidifierManageComponent, {
      size: 'sm',
    });
    ref.componentInstance.service = this.service;
  }
}
