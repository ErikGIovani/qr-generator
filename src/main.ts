import './style.css';
import error from './qr-logo-error.png';
import hi from './qr-logo.png';
declare let QRCode: any;

const qrApp = document.getElementById('app')!;
const form = document.querySelector<HTMLFormElement>('form')!;
const input = document.getElementById('qr-input') as HTMLInputElement;

qrApp.innerHTML = `<img src="${hi}" alt="qr code">`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  qrApp.innerHTML = '';
  if (input.value !== '') {
    new QRCode(qrApp, input.value);
  }else {
    qrApp.innerHTML = `<img src="${error}" alt="qr code error">`;
  }
  input.value = '';
});