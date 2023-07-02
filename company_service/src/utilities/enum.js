const permission = {
      //employee permission
      
      'EMPLOYEE.CREATE' : 'employee.create' ,
      'EMPLOYEE.DELETE' : 'employee.delete' , 
      'EMPLOYEE.UPDATE' : 'employee.update' ,
      'EMPLOYEE.READ'   : 'employee.read'   ,
      'EMPLOYEE.READALL': 'employee.readall',

      //company permission 

      'COMPANY.CREATE' : 'company.create' ,
      'COMPANY.DELETE' : 'company.delete' , 
      'COMPANY.UPDATE' : 'company.update' ,
      'COMPANY.READ'   : 'company.read'   ,
      'COMPANY.READALL': 'company.readall',

      //session permission
       
      'SESSION.CREATE' : 'session.create' ,
      'SESSION.LOGOUT' : 'session.logout' , 
      'SESSION.UPDATE' : 'session.update' ,  
      'SESSION.FILTER' : 'session.filter' ,  
      'SESSION.READ'   : 'session.read',

      //auth permission
  
      'AUTH.CREATE' : 'auth.create' ,
      'AUTH.DELETE' : 'auth.delete' ,
      'AUTH.UPDATE' : 'auth.update' ,

      //Gcp permission

      'GCP.UPLOAD' : 'gcp.upload',
      'GCP.DOWNLOAD' : 'gcp.download',
  
  }
  
  
  
  
  module.exports = permission ;