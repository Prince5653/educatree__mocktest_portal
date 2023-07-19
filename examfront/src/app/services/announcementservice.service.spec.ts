import { TestBed } from '@angular/core/testing';

import { AnnouncementserviceService } from './announcementservice.service';

describe('AnnouncementserviceService', () => {
  let service: AnnouncementserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
