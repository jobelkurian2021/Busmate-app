import config from './config.json'

const baseUrl = config.baseUrl

export function getReservations(user) {
    return callGet(baseUrl + '/railway/reservations/' + user);
}

export function deleteReservation(id) {
    return callDelete(baseUrl + '/railway/reservations/' + id);
}

const callGet = (url) => {
    return fetch(url).then(handleres);
}
const callDelete = (url) => {
    return fetch(url, {
        method: 'DELETE'
    }).then(handleres);
}

const handleres = (res) => {
    if (res.ok) {
        return res.json();
    }
    else {
        if (res.status === 404) {
            return Promise.reject();
        } else {
            throw res.json();
        }
    }
}