import http from '@/plugins/http';
import { RoundNextRequest, RoundNextResponse } from '@/types/http';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function () {
  const params: RoundNextRequest = {
    ...mergeDefaultParams(),
  };

  return http.post<RoundNextResponse>('/round/next', params);
}
