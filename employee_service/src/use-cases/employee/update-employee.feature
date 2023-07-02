Feature: update Employee By Id.

  Scenario Outline: Try to update employee with invalid details, then it will throw error.
    Given Employee details id:'<id>',name:'<name>',email:'<email>',password:'<password>',position:'<position>',company_id:'<company_id>',is_verified:'<is_verified>' to update employee
    When Try to update employee
    Then It will throw error: '<error>' with message: "<message>" while updating employee
    # And GetEmployeesDetailByEmail function will call <getEmployeesDetailByEmailFunctionCallCount> time while creating new employee
    # And getEmployeesDetailByMobile function will call <getEmployeesDetailByMobileFunctionCallCount> time while creating new employee
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new employee
    # And createEmployee function will call <createEmployeeFunctionCallCount> time while creating new employee
 Examples: 
      | id                                       | name              | email                               | password      |  position     | company_id                                 | is_verified    | getSessionsDetailByEmailFunctionCallCount | getSessionsDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createSessionFunctionCallCount | error           | message                                                |
      |                                          |                   |                                     |               |               |                                            |                |  0                                      | 0                                       | 0                                | 0                           | ValidationError |"\"employeeId\" is required"                                  |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     |                   |                                     |               |               |                                            |                |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeName\" is required"                              |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | vatsalpatel       |                                     |               |               |                                            |                |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeEmail\" is required"                       |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | vatsalpatel       | vatsal@rapidops.com                 |               |               |                                            |                |  0                                      | 0                                       | 0                                | 0                           | ValidationError |"\"password\" is required"                                 |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | vatsalpatel       | vatsal@rapidops.com                 | vatsal123     |               |                                            |                |  0                                      | 0                                       | 0                                | 0                           | ValidationError |  "\"employeePossition\" is required"                            |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | vatsalpatel       | vatsal@rapidops.com                 | vatsal123     | seniorEngineer|                                            |                |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"company_id\" is required" |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | vatsalpatel       | vatsal@rapidops.com                 | vatsal123     | seniorEngineer|  fa1507c0-05f6-11ee-aacd-d5f50a890398      |                |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"is_verified\" is required" |
      | d8cfe36a-81f5-4d96-8a54-4ac923012c       | vatsalpatel       | vatsal@rapidops.com                 | vatsal123     | seniorEngineer|  fa1507c0-05f6-11ee-aacd-d5f50a890398      |  true          |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeId\" must be a valid GUID" |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | vatsalpatel       | vatsal@rapidops.com                 | vatsal123     | seniorEngineer|  fa1507c0-05f6-11ee-aacdf50a890398      |  true          |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"company_id\" must be a valid GUID" |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | vatsalpatel       | vatsaapidops.com                 | vatsal123     | seniorEngineer|  d8cfe36a-81f5-4d96-8a54-4ac923cb012c       |  true          |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeEmail\" must be a valid email" |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c          | va       | vatsal@rapidops.com               | vatsal123     | seniorEngineer|  d8cfe36a-81f5-4d96-8a54-4ac923cb012c       |  true          |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeName\" length must be at least 3 characters long" |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c          | vatsalpatel       | vatsal@rapidops.com               | va      | seniorEngineer|  d8cfe36a-81f5-4d96-8a54-4ac923cb012c       |  true          |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"password\" length must be at least 3 characters long" |
#   Scenario Outline: Try to create new session with valid inputs, then it will create new session.
#  Scenario Outline: Invalid employeeName input then throw error.
#     Given Second Enter employeeid: <employeeid> and updated employeename: <employeeName> for updating a employee
#     When Try to update employee
#     Then It will throw error: '<error>' with message: '<message>' while updating employee

#     Examples:
#         |   employeeid   |    employeeName     | error       | message                       |
#         # Invalid scenarios
#         |   32       |  12345       | Error       |\"name\" must be a string    |


# Scenario Outline: Try to update employee with valid inputs, then it will success.
#     Given Third Enter employeeid: <employeeId> and updated employeename: '<name>' for update a employee
#     When Try to update employee
#     Then update employee successfully message:"<message>"

#     Examples:
#       |     employeeId | name         |message|
#       |      1        |  vatsal      | update employee successfully | 