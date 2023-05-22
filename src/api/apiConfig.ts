import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://gmail-smtp-git-main-nastyaz23.vercel.app/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  /*  mode: 'no-cors', */
});
