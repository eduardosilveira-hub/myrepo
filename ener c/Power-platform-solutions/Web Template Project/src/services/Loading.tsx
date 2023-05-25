export const LoadingService = {
    start: () => {
        window.addEventListener('cssp-loading', () => {
            document.body.insertAdjacentHTML('afterbegin', `
            <div id="cssp-loading-panel" style="
                backdrop-filter: blur(2px);
                height: 100%;
                width: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 2000;
                display: flex;
            ">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="75" cy="50" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.9166666666666666s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.9166666666666666s"></animate>
                    </circle><circle cx="71.65063509461098" cy="62.5" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.8333333333333334s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.8333333333333334s"></animate>
                    </circle><circle cx="62.5" cy="71.65063509461096" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.75s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.75s"></animate>
                    </circle><circle cx="50" cy="75" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.6666666666666666s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.6666666666666666s"></animate>
                    </circle><circle cx="37.50000000000001" cy="71.65063509461098" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5833333333333334s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5833333333333334s"></animate>
                    </circle><circle cx="28.34936490538903" cy="62.5" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5s"></animate>
                    </circle><circle cx="25" cy="50" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.4166666666666667s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.4166666666666667s"></animate>
                    </circle><circle cx="28.34936490538903" cy="37.50000000000001" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.3333333333333333s"></animate>
                    </circle><circle cx="37.499999999999986" cy="28.349364905389038" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.25s"></animate>
                    </circle><circle cx="49.99999999999999" cy="25" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.16666666666666666s"></animate>
                    </circle><circle cx="62.5" cy="28.349364905389034" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.08333333333333333s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.08333333333333333s"></animate>
                    </circle><circle cx="71.65063509461096" cy="37.499999999999986" fill="#f5f5f5" r="5">
                    <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s"></animate>
                    <animate attributeName="fill" values="#f5f5f5;#f5f5f5;#007dc5;#f5f5f5;#f5f5f5" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="0s"></animate>
                    </circle>
                </svg>
            </div>`);

        });
    },
    show: () => {
        const ev = new CustomEvent('cssp-loading');
        window.dispatchEvent(ev);
    },
    hide: () => {
        const loading = document.querySelector('#cssp-loading-panel');
        if (loading) loading.remove();
    },
}