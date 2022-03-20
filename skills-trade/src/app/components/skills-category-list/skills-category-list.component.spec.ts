import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCategoryListComponent } from './skills-category-list.component';

describe('SkillsCategoryListComponent', () => {
  let component: SkillsCategoryListComponent;
  let fixture: ComponentFixture<SkillsCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
