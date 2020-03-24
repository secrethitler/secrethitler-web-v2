import http from '@/plugins/http';
import { PolicyPeekRequest, PolicyPeekResponse } from '@/types/http';
import { Policy } from '@/types/game';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function () {
  const params: PolicyPeekRequest = {
    ...mergeDefaultParams(),
  };

  return http.get<PolicyPeekResponse>('/policy/peek', { params });
}
