import http from '@/plugins/http';
import { PolicyChancellorPickRequest, PolicyChancellorPickResponse } from '@/types/http';
import { Policy } from '@/types/game';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (discardedPolicy: Policy) {
  const params: PolicyChancellorPickRequest = {
    discardedPolicy,
    ...mergeDefaultParams(),
  };

  return http.post<PolicyChancellorPickResponse>('/policy/chancellor-pick', params);
}
