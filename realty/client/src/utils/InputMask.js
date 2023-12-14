import InputMask from "inputmask";

function inputMask(element) {
    if (element) {
        const maskOptions = {
            mask: "+38(099)-999-99-99",
            lazy: true,
        };

        const mask = InputMask(maskOptions);
        mask.mask(element);
        element.focus();
    }
}

export default inputMask;