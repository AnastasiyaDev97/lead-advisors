import type { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

type sendMessagePayloadType = {
  email: string;
};

export const sendMessage = (
  sendMessagePayload: sendMessagePayloadType,
): Promise<AxiosResponse<{ info: string }, sendMessagePayloadType>> => {
  return instance
    .post('sendMessage', JSON.stringify(sendMessagePayload))
    .then(response => {
      return response;
    });
};
