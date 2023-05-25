import React, { useState } from "react";
import ReactDOM from "react-dom";
import { UserService } from "../services";
import {
    RiSecurePaymentFill as EasyPay,
    RiCustomerService2Fill as LiveChat
} from 'react-icons/ri';
import {
    FaMoneyBillWave as Manual,
    FaCheckCircle as Check,
    FaTrashAlt as Trash
} from 'react-icons/fa';
import {
    BsTwitter as Twitter,
    BsLinkedin as Linkedin,
    BsYoutube as Youtube
    // BsDownload as Pdf
} from 'react-icons/bs';
import {
    AiFillFacebook as Facebook,
    AiOutlineCheckCircle as Paid,
    AiFillBank as Bank,
    AiFillCreditCard as Card,
    AiOutlineFilePdf as Pdf
} from 'react-icons/ai';
import { CircularProgress, Popover, TextField } from "@mui/material";

export const Components = {
    init: () => {
        window.customElements.define('app-locationpicker', LocationPicker);
        window.customElements.define('facebook-icon', FacebookIcon);
        window.customElements.define('twitter-icon', TwitterIcon);
        window.customElements.define('linkedin-icon', LinkedInIcon);
        window.customElements.define('youtube-icon', YoutubeIcon);
        window.customElements.define('paid-icon', PaidIcon);
        window.customElements.define('loading-icon', LoadingIcon);
        window.customElements.define('bank-icon', BankIcon);
        window.customElements.define('card-icon', CardIcon);
        window.customElements.define('manual-icon', ManualIcon);
        window.customElements.define('easypay-icon', EasypayIcon);
        window.customElements.define('live-chat-icon', LiveChatIcon);
        window.customElements.define('check-icon', CheckIcon);
        window.customElements.define('delete-icon', DeleteIcon);
        window.customElements.define('pdf-icon', PdfIcon);
        return;
    },
}

function MyPopover(props: {element: any}) {
    const element = props.element;
    const id = 'random-id-' + Date.now();

    const [visible,setVisible] = React.useState(true);
    const [value,setValue] = React.useState(element.innerHTML);

    return (
    <Popover
        key={Date.now() + ''}
        id={id}
        open={visible}
        anchorEl={element}
        onClose={(ev,reason) => {
            if (reason == 'escapeKeyDown') setVisible(false);
        }}
        
        // anchorOrigin={{
        //     vertical: 'bottom',
        //     horizontal: 'left',
        // }}
    >
        <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={10}
            value={element.innerHTML}
            style={{ width: '800px' }}
            onChange={(ev) => {
                element.innerHTML = ev.target.value;
                setValue(ev.target.value)
            }}
        />
    </Popover>);
}

class LocationPicker extends HTMLElement {
    constructor(props: any) { super(); ReactDOM.render(<LocationPickerComponent />, this); }
}

function LocationPickerComponent() {
    const [location, setLocation] = useState(UserService.getSelectedLocation());
    const userDetails = UserService.getUserDetails();

    return (
        <div className="cssp-location-picker">

            <span className="cssp-font-14 font-bold">Service address: </span>
            <span className={'link cssp-font-14 ' + (userDetails.account && userDetails.account.locations.length > 1 ? "dropdown-toggle" : '')}
                data-toggle={(userDetails.account && userDetails.account.locations.length > 1 ? "dropdown" : '')}>
                {location ? location.name : 'None'}
            </span>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    userDetails.account ?
                        userDetails.account.locations.map((x: any) => (
                            <span className="dropdown-item cssp-font-14 link"
                                key={'location-' + Date.now()}
                                onClick={() => {
                                    const currentRoute = window.location.pathname.replace(/\/$/g, '');
                                    window.location.href = currentRoute + '?location=' + x.id;
                                }}
                            >{x.name}</span>
                        ))
                        :
                        null
                }
            </div>
        </div>
    );
}


class FacebookIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Facebook />)(), this); }
}
class TwitterIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Twitter />)(), this); }
}
class YoutubeIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Youtube />)(), this); }
}
class LinkedInIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Linkedin />)(), this); }
}
class PaidIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Paid className='paid-icon' />)(), this); }
}
class LoadingIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <CircularProgress size={26} />)(), this); }
}
class BankIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Bank style={{width:'110px', height:'110px'}} />)(), this); }
}
class CardIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Card style={{width:'110px', height:'110px'}} />)(), this); }
}
class EasypayIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <EasyPay style={{width:'110px', height:'110px'}} />)(), this); }
}
class ManualIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Manual style={{width:'110px', height:'110px'}} />)(), this); }
}
class LiveChatIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <LiveChat style={{width:'50px', height:'50px'}} />)(), this); }
}
class CheckIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Check style={{width:'20px', height:'20px'}} />)(), this); }
}
class DeleteIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Trash style={{width:'20px', height:'20px'}} />)(), this); }
}
class PdfIcon extends HTMLElement {
    constructor() { super(); ReactDOM.render((() => <Pdf style={{width:'40px', height:'50px'}} />)(), this); }
}