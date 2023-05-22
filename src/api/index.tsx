import type { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

type sendMessagePayloadType = {
  name: string;
  email: string;
  text: string;
};

export const sendMessage = (
  sendMessagePayload: sendMessagePayloadType,
): Promise<AxiosResponse<any, any>> => {
  return instance.post('sendMessage', sendMessagePayload).then(response => {
    return response;
  });
};
