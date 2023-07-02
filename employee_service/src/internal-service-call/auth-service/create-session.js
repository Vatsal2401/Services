module.exports = function makeCreateSession({axios, config}) {
    return async function createSession({user_id,jwt_token,session_id,user_agent,device ,ip_address,city,state,country}) {
      return axios({
        method: 'post',
        url: `${config.serviceEndpoints.authenticationAndAuthorization}/session`,
        data: {
            user_id,
            jwt_token,
            session_id,
            user_agent,
            device ,
            ip_address,
            city,
            state,
            country
          }
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
  