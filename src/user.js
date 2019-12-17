import request from './request'

export function getUserName(id){
  return request('/users/'+id).then(user => user.name);
}


