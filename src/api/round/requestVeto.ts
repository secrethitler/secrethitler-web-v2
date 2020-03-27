import http from '@/plugins/http';
import { RoundRequestVetoRequest, RoundRequestVetoResponse } from '@/types/http';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function () {
  const params: RoundRequestVetoRequest = {
    ...mergeDefaultParams(),
  };

  return http.post<RoundRequestVetoResponse>('/round/request-veto', params);
}
