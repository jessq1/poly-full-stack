import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/payments'

function createPayment(paymentData: any) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentData)
  })
  .then(res => res.json())
}

function getPayments() {
  return fetch(BASE_URL, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function getIncompeltePayments() {
  return fetch(`${BASE_URL}/incomplete`, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function getPendingPayments() {
  return fetch(`${BASE_URL}/pending`, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function deletePayment(id: String) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function updatePayment(paymentData: any) {
  return fetch(`${BASE_URL}/${paymentData.id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentData)
  })
  .then(res => res.json())
}


export {
  createPayment,
  getPayments,
  getIncompeltePayments,
  getPendingPayments,
  deletePayment,
  updatePayment,
}