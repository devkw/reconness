﻿import api from '../../api'

const actions = {
    notification() {
        return new Promise((resolve, reject) => {
            try {
                api.get('accounts/notification')
                    .then((res) => {
                        resolve(res.data)
                    })
                    .catch(err => reject(err))
            }
            catch (err) {
                reject(err)
            }
        })
    },
    saveNotification(context, notification) {
        return new Promise((resolve, reject) => {
            try {
                api.create('accounts/saveNotification', notification)
                    .then(() => {
                        resolve()
                    })
                    .catch(err => reject(err))
            }
            catch (err) {
                reject(err)
            }
        })
    }
}


export default {
    namespaced: true,
    actions
}