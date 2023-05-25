import { Utils } from "./Utils.js";

export class UserService {
    static getUserId() {
        const contactid = document.querySelector('#contactid');
        //@ts-ignore
        return contactid ? contactid.value : '';
    }

    static getUserName() {
        const contactid = document.querySelector('#contact-name');
        //@ts-ignore
        return contactid ? contactid.value : '';
    }

    static getUserDetails() {
        const contactPayload = document.querySelector('#contact-payload');
        //@ts-ignore
        return contactPayload ? JSON.parse(decodeURIComponent(contactPayload.value)) : {};
    }

    static getLogo() {
        const details = UserService.getUserDetails();
        if (!details || !details.logo) return null;
        return details.logo;
    }

    static getSelectedLocation() {
        if (UserService.getUserDetails().account.locations.length <= 0) return {};

        const locationId = Utils.getQueryParam('location');
        if (locationId) {
            const location = UserService.getUserDetails().account.locations.find((x) => x.id == locationId);
            return location || {};
        }


        if (UserService.getUserDetails().account &&
        UserService.getUserDetails().account.locations.length > 0) {
            return UserService.getUserDetails().account.locations[0];
        }

        return null;
    }
}
