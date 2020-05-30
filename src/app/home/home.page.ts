import {Component} from '@angular/core';
import {IpUtil} from '../util/ip-util';
import {AlertController, ModalController} from '@ionic/angular';
import {IpAddressComponent} from '../ip-address/ip-address.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    ipAddress = '192.168.66.6';
    subnetMaskSize = 24;

    constructor(
        private readonly alertController: AlertController,
        private readonly modalController: ModalController,
    ) {
    }

    async calculate() {
        if (!IpUtil.verifyIp(this.ipAddress)) {
            const ipValid = IpUtil.verifyIp(this.ipAddress) ? 'valid' : 'invalid';
            const snmValid = (this.subnetMaskSize > 0 && this.subnetMaskSize < 31) ? 'valid' : 'invalid';
            const alert = await this.alertController.create({
                header: 'Invalid data entered',
                message: 'IP address is ' + ipValid + ',\n' +
                    'Subnet mask is ' + snmValid,
                buttons: [
                    {
                        role: 'ok',
                        text: 'OK'
                    }
                ]
            });
            await alert.present();
        } else {
            const modal = await this.modalController.create({
                component: IpAddressComponent,
                componentProps: {
                    ip: this.ipAddress,
                    snm: this.subnetMaskSize,
                }
            });
            await modal.present();
        }
    }
}
