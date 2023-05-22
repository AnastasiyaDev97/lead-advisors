import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://gmail-smtp-git-main-nastyaz23.vercel.app/',
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
});
