import '../templates.scss';
import "../../node_modules/jquery/dist/jquery";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import { Logo } from "./Logo";

export const DefaultTemplate = (props: any) => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.classList.add('cssp-template');
    
    return (
        <div className="cssp-template">
            <div className="left-panel">

                <div className="wrapper">
                    <div className="wrapper-img">
                        <Logo />
                    </div>
                    {
                        props.title ?
                            <div className="cssp-page-title">{props.title}</div>
                            :
                            null
                    }
                    {props.children}
                </div>
            </div>
            <div className="right-panel">
            </div>
        </div>
    );
}