import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { DynamicElement } from '../../interfaces/dynamic-element';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private overlay: Overlay) {}

  private _overlayRef!: OverlayRef;

  open(dynElement: DynamicElement) {
    const overlayRef = this.createOverlay();
    const modalPortal = new ComponentPortal(ModalComponent);
    const containerRef = overlayRef.attach(modalPortal);

    if (dynElement) {
      containerRef.instance.dynamicElement = dynElement;
    }

    overlayRef.backdropClick().subscribe((_) => overlayRef.dispose());
    this._overlayRef = overlayRef;
    return overlayRef;
  }

  close() {
    this._overlayRef.dispose();
  }

  private createOverlay(): OverlayRef {
    const overlayConfig = this.overlayConfig();
    return this.overlay.create(overlayConfig);
  }

  private overlayConfig(): OverlayConfig {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'modal--backdrop',
      panelClass: 'modal--panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    return overlayConfig;
  }
}
