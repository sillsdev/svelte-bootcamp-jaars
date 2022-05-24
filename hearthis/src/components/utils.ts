import { location, push } from "svelte-spa-router";

export function changeUrlPart(index, value) {
    location.subscribe((val) => {
        let urlParts = val.split("/");
        urlParts[index] = value;
        push(urlParts.join('/'));
    })
}
