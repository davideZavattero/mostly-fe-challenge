import { Component, Input, OnInit } from '@angular/core';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { Iconlist } from '../../../enums/iconlist';
import { DynamicElement } from '../../../interfaces/dynamic-element';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() dynamicElement: DynamicElement = {
    type: LoadingComponent,
  };

  closeIcon = Iconlist.CLOSE;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}
  close() {
    this.modalService.close();
  }
}
