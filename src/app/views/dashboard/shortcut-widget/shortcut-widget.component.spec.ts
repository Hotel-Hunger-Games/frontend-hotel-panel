import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutWidgetComponent } from './shortcut-widget.component';

describe('ShortcutWidgetComponent', () => {
  let component: ShortcutWidgetComponent;
  let fixture: ComponentFixture<ShortcutWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcutWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortcutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
