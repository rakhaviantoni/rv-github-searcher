import api from '@/services/api'

export default {
  searchUser (params) {
    return api().get('users/' + params.username);
  },
}