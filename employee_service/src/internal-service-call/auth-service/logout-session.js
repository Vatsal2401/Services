module.exports = function makeLogoutSession({axios, config}) {
    return async function logoutSession({accessToken}) {
      return axios({
        method: 'delete',
        url: `${config.serviceEndpoints.authenticationAndAuthorization}/session/logout`,
        headers: {accessToken},
      }).then(function(response) {
        console.log(response.data.success);
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
  