module.exports = function makeGetAllCollection({axios, config}) {
    return async function getAllCollection({accessToken, linkname}) {
      return axios({
        method: 'get',
        url: `${config.serviceEndpoints.authenticationAndAuthorization}/oauth/authorize-user`,
        params: {accessToken, linkname},
      }).then(function(response) {
        if (response.status === 200) {
          return response.data.Data;
        } else {
          return false;
        }
      }).catch(() => {
        return false;
      });
    };
  };
  