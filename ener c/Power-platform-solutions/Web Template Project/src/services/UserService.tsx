import { HttpService, Utils } from ".";

export class UserService {
    public static getUserId() {
        const contactid = document.querySelector('#contactid');
        //@ts-ignore
        return contactid ? contactid.value : '';
    }

    public static getUserName() {
        const contactid = document.querySelector('#contact-name');
        //@ts-ignore
        return contactid ? contactid.value : '';
    }

    public static getUserDetails() {
        const contactPayload = document.querySelector('#contact-payload');
        //@ts-ignore
        return contactPayload ? JSON.parse(decodeURIComponent(contactPayload.value)) : {};
    }

    public static getLogo() {
        const details = UserService.getUserDetails();
        if (!details || !details.logo) return null;
        return details.logo;

        // let binary = '';
        // var bytes = new Uint8Array(details.logo.split(',').map((x: any) => parseInt(x)));
        // var len = bytes.byteLength;
        // for (var i = 0; i < len; i++) {
        //     binary += String.fromCharCode(bytes[i]);
        // }
        // return btoa(binary);
    }

    public static getSelectedLocation() {
        if (UserService.getUserDetails().account.locations.length <= 0) return {};

        const locationId = Utils.getQueryParam('location');
        if (locationId) {
            const location = UserService.getUserDetails().account.locations.find((x: any) => x.id == locationId);
            return location || {};
        }


        if (UserService.getUserDetails().account &&
        UserService.getUserDetails().account.locations.length > 0) {
            return UserService.getUserDetails().account.locations[0];
        }

        return null;
    }

    public static isSignedIn() {
        const signedin = document.querySelector('#signedin');
        //@ts-ignore
        return signedin && signedin.value === 'true';
    }

    public static async signIn() {
        const authorityElement = document.querySelector('#b2c-authority');
        //@ts-ignore
        const authority = authorityElement ? authorityElement.value : '';

        if (!authority) {
            alert('B2C Authority not found');
            return;
        }

        const tokenData = await HttpService.get(window.location.origin + '/_layout/tokenhtml?_=' + Date.now(), "application/json; charset=utf-8");

        const loginUrl = window.location.origin + "/Account/Login/ExternalLogin?returnUrl=%2F";
        const provider = authority;
        //@ts-ignore
        const token = tokenData.split('"')[5];

        // Workaround
        const request = document.createElement('form');
        request.method = 'post';
        request.action = loginUrl;
        request.style.display = 'none';
        const tokenInput = document.createElement('input');
        tokenInput.value = token;
        tokenInput.type = 'hidden';
        tokenInput.name = '__RequestVerificationToken';
        const providerInput = document.createElement('input');
        providerInput.value = provider;
        providerInput.type = 'hidden';
        providerInput.name = 'provider';
        request.appendChild(tokenInput);
        request.appendChild(providerInput);
        document.body.appendChild(request);
        request.submit();
    }

    public static signOut() {
        window.location.href = window.location.origin + '/Account/Login/LogOff';
    }
}
