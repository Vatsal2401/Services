Feature: Login new Employee

    Scenario Outline: Try to login with invalid details, then it will throw error.
    Given Employee details email:"<email>",password:"<password>",user_agent:"<user_agent>",device:"<device>" to login employee
    When Try to login employee
    Then Throw error: "<error>" with message: "<message>" while logging a employee

    Examples:
        |    email                     | password           | user_agent  | device    |     error           | message                                               |
        |                              | vatsal123          |             |           |     ValidationError           | "\"employeeEmail\" is required"      |
        | vatsal@rapidops.com          |                    |             |           |     ValidationError           | "\"employeePassword\" is required"                           |
        | vatsal@rapidops.com          | vatsal123          |             |           |     ValidationError           |  "\"user_agent\" is required"             |
        | vatsal@rapidops.com          | vatsal123          |  Mozilla/5.0|           |     ValidationError           |  "\"device\" is required" |

#  Scenario Outline: Try to login  with invalid credentials, then it will throw error.
#     Given Employee details email:"<email>", password: "<password>", user_agent: "<user_agent>",device:"<device>" to login employee
#     And   Not existed email with details: "<employeeDetailsByEmail>" 
#     When  Try to login employee
#     Then  It will throw error: "<error>" with message: "<message>" while loging a employee
#     # And GetUsersDetailByEmail function will call <getUsersDetailByEmailFunctionCallCount> time while creating new user
#     # And getUsersDetailByMobile function will call <getUsersDetailByMobileFunctionCallCount> time while creating new user
#     # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new user
#     # And createUser function will call <createUserFunctionCallCount> time while creating new user

#     Examples:
#       |  device       | email               | user_agent        | password   | employeeDetailsByEmail | getUsersDetailByEmailFunctionCallCount | getUsersDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createUserFunctionCallCount | error          | message                                      |
#       | desktop       | vatsal@rapidops.com |  desktop          | 1234567890 | '{"id":"10"}'      | 1                                      | 0                                       | 0                                | 0                           | ForbiddenError | 'User with the same email is already exists' |

#     Scenario Outline: Valid inputs then login a employee.
#     Given Employee details email:"<email>", password: "<password>", user_agent: "<user_agent>",device:"<device>" to login employee
#     When Try to login employee
#     Then It will login employee with details: "<newEmployeeDetails>"

#     Examples:
#         | device       | email            | user_agent        |  password     |  newEmployeeDetails  |
#         | Vatsal       | SE               | asdf-45fghj-fgh   |   fhgj        |  '{id:1}'            |
