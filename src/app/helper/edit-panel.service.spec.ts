import { TestBed, inject } from '@angular/core/testing';

import { EditPanelService } from './edit-panel.service';

describe('EditPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPanelService]
    });
  });

  it('should be created', inject([EditPanelService], (service: EditPanelService) => {
    expect(service).toBeTruthy();
  }));
});
