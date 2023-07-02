
  function makeGetRandomIpAndLocation({geoip}) {
      const ipAddressList=["103.238.107.135","223.196.172.139","202.131.125.122","106.198.211.97","43.250.158.185","123.201.3.127","219.91.163.223","103.217.84.112","103.217.84.112", "223.196.172.139","103.238.107.135"]
    return async function getRandomIpAndLocation({}) {
      
     const random=Math.floor(Math.random() * 10)
     const geo = geoip.lookup(ipAddressList[random]);
  if (geo) {
    return {
        IP:ipAddressList[random],
        Country:geo.country,
        City: geo.city,
        Coordinates: geo.ll,
        State:geo.region
    }
  } 
    };

  }
  
  module.exports = makeGetRandomIpAndLocation;
  