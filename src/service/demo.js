import request from '@/utils/request';
import { getEnv } from '@/utils/utils';

const api = getEnv('API');

export function insert(params) {
  return request({
    url: `${api}/test`,
    method: 'post',
    data: params,
  });
}

export function queryList(params) {
  return request({
    url: `${api}/test`,
    params,
  });
}
