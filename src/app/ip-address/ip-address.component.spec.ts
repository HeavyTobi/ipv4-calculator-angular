import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {IpAddressComponent} from './ip-address.component';

describe('IpAddressComponent', () => {
    let component: IpAddressComponent;
    let fixture: ComponentFixture<IpAddressComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IpAddressComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(IpAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
