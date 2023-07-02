Feature: Creating new Employee

    Scenario Outline: Try to create new employee with invalid details, then it will throw error.
    Given Employee details name:"<name>",email:"<email>",password:"<password>",position:"<position>",company:"<companyId>" to create new employee
    When Try to create new employee
    Then Throw error:"<error>" with message:"<message>" while creating a employee

    Examples:
        |    name   | email                        | position |password        | companyId           | error                        | message                                               |
        |           | vatsal@rapidops.com          | SE       |                | asdf-45fghj-fgh     |ValidationError               |  \"employeeName\" is required                      |
        | Vatsal    |                              | SE         | vatsal123    | asdf-45fghj-fgh     |ValidationError               |  \"employeeEmail\" is required                          |
        | Vatsal    | vatsal@rapidops.com          | SE       |                |                     |ValidationError               | \"password\" is required                           |
        | Vat       | vatsal@rapidops.com          | SE       |  vatsal123     |                     |ValidationError               | \"company_name\" is required|
        | Va        | vatsal@rapidops.com          | SE       |  vatsal123     |                     |ValidationError               | \"employeeName\" length must be at least 3 characters long|
        | Vatsal    | vatsalapidops.com            | SE       |  vatsal123     |                     |ValidationError               | \"employeeEmail\" must be a valid email|
        | vatsal    | vatsal@apidops.com           | S        |  vatsal123     |                     |ValidationError               | \"position\" length must be at least 2 characters long|
        | vatsal    | vatsal@apidops.com           | SE       |  2334          |                     |ValidationError               | \"password\" length must be at least 5 characters long|

  Scenario Outline: Try to create new employee with already registered email, then it will throw error.
    Given Employee details name:"<name>",email:"<email>",password:"<password>",position:"<position>",company:"<companyId>" to create new employee
    And Already existed employee details: "<employeeDetailsByEmail>" with same email
    When Try to create new employee
    Then Throw error:"<error>" with message:"<message>" while creating a employee
    # And GetUsersDetailByEmail function will call <getUsersDetailByEmailFunctionCallCount> time while creating new user
    # And getUsersDetailByMobile function will call <getUsersDetailByMobileFunctionCallCount> time while creating new user
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new user
    # And createUser function will call <createUserFunctionCallCount> time while creating new user

    Examples:
      | name       | email             | position        | password   |companyId               | employeeDetailsByEmail | getUsersDetailByEmailFunctionCallCount | getUsersDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createUserFunctionCallCount | error          | message                                      |
      | Vatsal     | vatsalpatel@rapidops.com | SE              | vatsal123  | asdf-45fghj-fgh        |'{"id":"10"}'      | 1                                      | 0                                       | 0                                | 0                           | ForbiddenError | Employee Already Exist With This Email |

    
    Scenario Outline: Valid inputs then create a employee.
    Given Employee details name:"<name>",email:"<email>",password:"<password>",position:"<position>",company:"<companyId>" to create new employee
    When Try to create new employee
    Then It will create new employee with details: "<newEmployeeDetails>"

    Examples:
        | name         | email                      |position  |password              | companyId           |  newEmployeeDetails  |
        | Vatsal       | vatsal@rapidops.com        |   SE     | asdf-45fghj-fgh      |  asdf-45fghj-fgh           |     successfull               |
