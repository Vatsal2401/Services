module.exports = function makeAuthorizeUser({axios, config}) {
  return async function authorizeUser({accessToken,permission}) {
    return axios({
      method: 'post',
      url: `${config.serviceEndpoints.authenticationAndAuthorization}/authorize-user`,
      headers: {accessToken},
      data: {
        permission,
      }
    }).then(function(response) {
      if (response.data.success) {
        return true
      }
      else{
       return false
      }
    }).catch(() => {
      return false;
    });
  };
};
