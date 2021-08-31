export default function (identifier, value) {

    let isValid = true;
    let errMsg = '';

    switch (identifier) {

        case('firstName'):
        case('secondName'):
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Vui lòng nhập tên';
            } else if (!value.match(/^[a-zA-Z]*$/) && isValid) {
                isValid = false;
                errMsg = 'Tên phải là chữ cái';
            } else if (value.length < 2 && isValid) {
                isValid = false;
                errMsg = 'Tên phải dài hơn một kí tự';
            }
            break;

        case('email') :
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Vui lòng nhập email';
            } else {
                const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(value)) {
                    isValid = false;
                    errMsg = "Email không hợp lệ"
                }
            }
            break;

        default:

    }

    return {isValid: isValid, errorsMsg: errMsg};
}