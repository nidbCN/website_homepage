import axios from "axios";

default export function Request(url ) {
    const req = new axios(url, {
        method: 'get'
    });
}